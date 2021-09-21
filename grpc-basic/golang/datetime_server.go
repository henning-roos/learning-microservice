package main

import (
	"context"
	"log"
	"net"
	"time"

	pb "golang/interfaces"

	"google.golang.org/grpc"
)

const (
	host = "localhost:50052"
)

type server struct {
	pb.UnimplementedDateTimeServer
}

func (s *server) Time(ctx context.Context, in *pb.TimeRequest) (*pb.TimeReply, error) {
	log.Printf("received a Time request")
	currentTime := time.Time.Clock() //TODO: change this
	return &pb.TimeReply{Time: currentTime}, nil
}

func (s *server) Date(ctx context.Context, in *pb.DateRequest) (*pb.DateReply, error) {
	log.Printf("received a Date request")
	currentTime := time.Now().String() //TODO: change this
	return &pb.DateReply{Date: currentTime}, nil
}

func main() {
	lis, err := net.Listen("tcp", host)
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}
	s := grpc.NewServer()
	pb.RegisterDateTimeServer(s, &server{})
	log.Printf("server listening at %v", lis.Addr())
	if err := s.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}

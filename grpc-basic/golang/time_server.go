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
	pb.UnimplementedTimeServer
}

func (s *server) Time(ctx context.Context, in *pb.TimeRequest) (*pb.TimeReply, error) {
	log.Printf("received a Time request")
	currentTime := time.Now().String()
	return &pb.TimeReply{Time: currentTime}, nil
}

func main() {
	lis, err := net.Listen("tcp", host)
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}
	s := grpc.NewServer()
	pb.RegisterTimeServer(s, &server{})
	log.Printf("server listening at %v", lis.Addr())
	if err := s.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}

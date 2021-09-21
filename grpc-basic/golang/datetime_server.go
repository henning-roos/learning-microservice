package main

import (
	"context"
	"fmt"
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

	currentTime := time.Now()
	currentHour, currentMinutes, currentSeconds := currentTime.Clock()

	// 14:45:32
	clocktime := fmt.Sprintf("%d:%d:%d", currentHour, currentMinutes, currentSeconds)

	return &pb.TimeReply{Time: clocktime}, nil
}

func (s *server) Date(ctx context.Context, in *pb.DateRequest) (*pb.DateReply, error) {
	log.Printf("received a Date request")

	currentTime := time.Now()
	currentYear, currentMonth, currentDay := currentTime.Date()

	// 2011-11-21
	datetime := fmt.Sprintf("%d-%d-%d", currentYear, currentMonth, currentDay)

	return &pb.DateReply{Date: datetime}, nil
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

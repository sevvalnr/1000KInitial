// package main

// import (
// 	"context"
// 	"time"

// 	"go.mongodb.org/mongo-driver/bson"
// 	"go.mongodb.org/mongo-driver/mongo"
// )

// type UserService struct {
// 	collection *mongo.Collection
// }

// func NewUserService(client *mongo.Client) *UserService {
// 	return &UserService{
// 		collection: client.Database("test").Collection("users"),
// 	}
// }

// func (us *UserService) CreateUser(user User) error {
// 	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
// 	defer cancel()

// 	_, err := us.collection.InsertOne(ctx, user)
// 	if err != nil {
// 		return err
// 	}

// 	return nil
// }

// func (us *UserService) ReadUser(email string) (User, error) {
// 	var user User
// 	filter := bson.M{"email": email}

// 	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
// 	defer cancel()

// 	err := us.collection.FindOne(ctx, filter).Decode(&user)
// 	if err != nil {
// 		return User{}, err
// 	}

// 	return user, nil
// }

// func (us *UserService) UpdateUser(email string, newData User) error {
// 	filter := bson.M{"email": email}
// 	update := bson.M{"$set": newData}

// 	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
// 	defer cancel()

// 	_, err := us.collection.UpdateOne(ctx, filter, update)
// 	if err != nil {
// 		return err
// 	}

// 	return nil
// }

// func (us *UserService) DeleteUser(email string) error {
// 	filter := bson.M{"email": email}

// 	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
// 	defer cancel()

// 	_, err := us.collection.DeleteOne(ctx, filter)
// 	if err != nil {
// 		return err
// 	}

// 	return nil
// }

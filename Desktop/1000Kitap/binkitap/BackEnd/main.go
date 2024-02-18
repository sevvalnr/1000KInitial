package main

import (
	"context"
	"encoding/json"
	"log"
	"net/http"
	"time"

	"github.com/gorilla/mux"
	"github.com/rs/cors"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

// UserAPI ...
type UserAPI struct {
	service *UserService
}

// User ...
type User struct {
	Email    string `json:"email"`
	Username string `json:"username"`
	Password string `json:"password"`
}

func NewUserAPI(service *UserService) *UserAPI {
	return &UserAPI{
		service: service,
	}
}

func (ua *UserAPI) CreateUserHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	var user User
	err := json.NewDecoder(r.Body).Decode(&user)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	err = ua.service.CreateUser(user)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	json.NewEncoder(w).Encode(user)
}

func (ua *UserAPI) ReadUserHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	email := mux.Vars(r)["email"]
	user, err := ua.service.ReadUser(email)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	json.NewEncoder(w).Encode(user)
}

func (ua *UserAPI) UpdateUserHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	email := mux.Vars(r)["email"]
	var newData User
	err := json.NewDecoder(r.Body).Decode(&newData)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	err = ua.service.UpdateUser(email, newData)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	json.NewEncoder(w).Encode(map[string]string{"message": "User updated successfully"})
}

func (ua *UserAPI) DeleteUserHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	email := mux.Vars(r)["email"]
	err := ua.service.DeleteUser(email)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	json.NewEncoder(w).Encode(map[string]string{"message": "User deleted successfully"})
}

// UserService ...
type UserService struct {
	collection *mongo.Collection
}

func NewUserService(client *mongo.Client) *UserService {
	return &UserService{
		collection: client.Database("user").Collection("user"),
	}
}

func (us *UserService) CreateUser(user User) error {
	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	_, err := us.collection.InsertOne(ctx, user)
	if err != nil {
		return err
	}

	return nil
}

func (us *UserService) ReadUser(email string) (User, error) {
	var user User
	filter := bson.M{"email": email}

	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	err := us.collection.FindOne(ctx, filter).Decode(&user)
	if err != nil {
		return User{}, err
	}

	return user, nil
}

func (us *UserService) UpdateUser(email string, newData User) error {
	filter := bson.M{"email": email}
	update := bson.M{"$set": newData}

	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	_, err := us.collection.UpdateOne(ctx, filter, update)
	if err != nil {
		return err
	}

	return nil
}

func (us *UserService) DeleteUser(email string) error {
	filter := bson.M{"email": email}

	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	_, err := us.collection.DeleteOne(ctx, filter)
	if err != nil {
		return err
	}

	return nil
}

func main() {
	uri := "mongodb+srv://nur:<Nur8866.>@cluster0.nutdzud.mongodb.net/"
	clientOptions := options.Client().ApplyURI(uri)

	var err error
	client, err := mongo.NewClient(clientOptions)
	if err != nil {
		log.Fatal(err)
	}

	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()
	err = client.Connect(ctx)
	if err != nil {
		log.Fatal(err)
	}
	defer client.Disconnect(ctx)

	router := mux.NewRouter()

	userService := NewUserService(client)
	userAPI := NewUserAPI(userService)

	router.HandleFunc("/user", userAPI.CreateUserHandler).Methods("POST")
	router.HandleFunc("/user/{email}", userAPI.ReadUserHandler).Methods("GET")
	router.HandleFunc("/user/{email}", userAPI.UpdateUserHandler).Methods("PUT")
	router.HandleFunc("/user/{email}", userAPI.DeleteUserHandler).Methods("DELETE")

	// CORS yapılandırması
	corsHandler := cors.Default().Handler(router)

	log.Println("HTTP Sunucusu :8080 portunda başlatıldı...")
	log.Fatal(http.ListenAndServe(":8080", corsHandler))
}

// package main

// import (
// 	"encoding/json"
// 	"net/http"

// 	"github.com/gorilla/mux"
// )

// type UserAPI struct {
// 	service *UserService
// }
// type User struct {
// 	Email    string `json:"email"`
// 	Username string `json:"username"`
// 	Password string `json:"password"`
// }

// func NewUserAPI(service *UserService) *UserAPI {
// 	return &UserAPI{
// 		service: service,
// 	}
// }

// func (ua *UserAPI) CreateUserHandler(w http.ResponseWriter, r *http.Request) {
// 	w.Header().Set("Content-Type", "application/json")

// 	var user User
// 	err := json.NewDecoder(r.Body).Decode(&user)
// 	if err != nil {
// 		http.Error(w, err.Error(), http.StatusBadRequest)
// 		return
// 	}

// 	err = ua.service.CreateUser(user)
// 	if err != nil {
// 		http.Error(w, err.Error(), http.StatusInternalServerError)
// 		return
// 	}

// 	json.NewEncoder(w).Encode(user)
// }

// func (ua *UserAPI) ReadUserHandler(w http.ResponseWriter, r *http.Request) {
// 	w.Header().Set("Content-Type", "application/json")

// 	email := mux.Vars(r)["email"]
// 	user, err := ua.service.ReadUser(email)
// 	if err != nil {
// 		http.Error(w, err.Error(), http.StatusInternalServerError)
// 		return
// 	}

// 	json.NewEncoder(w).Encode(user)
// }

// func (ua *UserAPI) UpdateUserHandler(w http.ResponseWriter, r *http.Request) {
// 	w.Header().Set("Content-Type", "application/json")

// 	email := mux.Vars(r)["email"]
// 	var newData User
// 	err := json.NewDecoder(r.Body).Decode(&newData)
// 	if err != nil {
// 		http.Error(w, err.Error(), http.StatusBadRequest)
// 		return
// 	}

// 	err = ua.service.UpdateUser(email, newData)
// 	if err != nil {
// 		http.Error(w, err.Error(), http.StatusInternalServerError)
// 		return
// 	}

// 	json.NewEncoder(w).Encode(map[string]string{"message": "User updated successfully"})
// }

// func (ua *UserAPI) DeleteUserHandler(w http.ResponseWriter, r *http.Request) {
// 	w.Header().Set("Content-Type", "application/json")

// 	email := mux.Vars(r)["email"]
// 	err := ua.service.DeleteUser(email)
// 	if err != nil {
// 		http.Error(w, err.Error(), http.StatusInternalServerError)
// 		return
// 	}

// 	json.NewEncoder(w).Encode(map[string]string{"message": "User deleted successfully"})
// }

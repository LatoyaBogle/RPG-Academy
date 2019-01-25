import axios from "axios";

export default {

  getUsers: function() {
    return axios.get("/api/users");
  },
  //Get User information w/ given id
  getUser: function(id) {
    return axios.get("/api/users" + id);
  },

  //Save user info to the database
  saveUser: function(userData) {
    return axios.post("/api/users", userData);
  },

  // Gets all books
  getToons: function() {
    return axios.get("/api/toons");
  },
  // Gets the book with the given id
  getToon: function(id) {
    return axios.get("/api/toons/" + id);

  },
  // Deletes the book with the given id
  deleteToon: function(id) {
    return axios.delete("/api/toons/" + id);
  },
  // Saves a book to the database
  saveToon: function(toonData) {
    return axios.post("/api/toons", toonData);
  }
};



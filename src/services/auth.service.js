import axios from "axios";
import authHeader from "./auth-header";
const API_URL = "http://localhost:4000/auth/";

class AuthService {
static async login(email, password) {
    return axios
      .post(API_URL + "login", { email, password })
      .then((response) => {
        if (response.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data.token;

   

      });
  }
  static async getUser(){
    return axios.get("http://localhost:4000/user", { headers: authHeader()});
  }

  
  static logout() {
    localStorage.removeItem("user");
  }

  static register(firstname, lastname, email, password, isValid) {
    return axios.post("http://localhost:4000/user", {
      firstname,
      lastname,
      email,
      password,
      isValid
    });
  }
  
  static update(firstname, lastname) {
    const user = JSON.parse(localStorage.getItem("user"));
    const id = user.user.id
    return axios.patch(`http://localhost:4000/user/${id}`, {
      firstname,
      lastname,
    },{ headers: authHeader()});
  }

 static getCurrentUser(){
    return JSON.parse(localStorage.getItem("user"));
  };
  authService() {
    this.authService.register()
  }
} 
export default AuthService;

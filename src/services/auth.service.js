import axios from "axios";

const API_URL = "http://localhost:4000/auth/";

class AuthService {
static async login(email, password) {
    return axios
      .post(API_URL + "login", { email, password })
      .then((response) => {
        console.log(response.data.token)
        if (response.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data.token));
        }
        else{
          console.log("hello")
        }

        return response.data;

      });
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
 static getCurrentUser(){
    return JSON.parse(localStorage.getItem("user"));
  };
  
  authService() {
    this.authService.register()
  }
} 
export default AuthService;

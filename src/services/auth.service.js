import axios from "axios";
import PhotoService from "./photo.service";
const API_URL = "http://localhost:4000/auth/";

class AuthService {
static async login(email, password) {
    return axios
      .post(API_URL + "login", { email, password })
      .then((response) => {
        if (response.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data));
          console.log(response.data.user.id)
        }
        let user = response.data.user.id;
        // const user1 = user.userId
        // this.getUserId()
        return response.data.token;

   

      });
  }
static async getUserId(user){
//  await console.log("hello");
// const userId = this.user
  // return userId
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

import axios from "axios";

const API_URL = "http://localhost:4000/auth/";

class AuthService {
static async login(email, password) {
    return axios
      .post(API_URL + "login", { email, password })
      .then((response) => {
        if (response.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data.token));
          console.log('test')
        }
        return response.data.token;

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
  static async getAllPhotos(){
    // return axios.get("http://localhost:4000/photo/"

  await axios({
    method: 'GET',
    url: "http://localhost:4000/photo/",
    headers: {
      'Authorization': 'Bearer ' + this.response.data.token,
    }

  },
  console.log(this.response.data.token)
  );
};
  authService() {
    this.authService.register()
  }
} 
export default AuthService;

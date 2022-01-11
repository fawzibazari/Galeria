import axios from "axios";
import authHeader from "./auth-header";
import AuthService from "./auth.service";
const API_URL = "http://localhost:4000/photo/";


class PhotoService {
    static getAllPhotos(){
        return axios.get(API_URL,
          { headers: authHeader(),
          }
          );
      };

      static async uploadPhotos(file,tag, description, userId){
       await AuthService.getUserId();
       const user = JSON.parse(localStorage.getItem("user"));
       console.log(user.user.id)
        let formData = new FormData();
        formData.append("image",file);
        formData.append("tags", tag);
        formData.append("description", description);
        formData.append("user", user.user.id);

        return axios.post(API_URL, formData,{
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
        );

      };

} 
export default PhotoService;

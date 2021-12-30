import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:4000/photo/";


class PhotoService {

    static getAllPhotos(){
        return axios.get(API_URL, { headers: authHeader() });
      };
      
      static postService(){
        // getAllPublicPosts,
        // getAllPrivatePosts
      };

} 
export default PhotoService;

export default function authHeader() {
    const user = JSON.parse(localStorage.getItem("user"));
  
    if (user && user) {
        console.log("test")
      return { Authorization: 'Bearer ' + user };
    } else {
      console.log(user)
      return {
      };
    }
  }
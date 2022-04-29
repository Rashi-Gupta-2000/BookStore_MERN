import axios from "axios"
const USER_BASE_URL = "http://localhost:4500/user"
const headers = {
    "Content-Type": "application/json",
    Authorization: "Token " + localStorage.getItem("token")

}
class UserService {
    //loginUser(email,password)
    loginUser(credentials) {
        /*
        fetch('url',{
            method:'POST',
            headers:{
                "Content-Type": 'application/json',
                 Authorization: 'Token '
            }
        })*/
        //axios.post(USER_BASE_URL+"/login",credentials,headers);
        //in login we don't require headers.
        return axios.post(USER_BASE_URL + "/login", credentials);

    }

    //redirect to home page
    HomeUser(){
        return axios.post(USER_BASE_URL+"/home",{ headers: headers })
    }

    //getuser
    getUser() {
        //console.log(headers);
        return axios.get(USER_BASE_URL, { headers: headers });
    }

    getUserById(id) {
        //console.log(headers);
        return axios.get(USER_BASE_URL + "/wishlist/" +id, { headers: headers });
    }

    //post user
    postUser(users) {
        return axios.post(USER_BASE_URL+"/signup", users, { headers: headers });
    }

    //delete user
    deleteUser(id) {
        return axios.delete(USER_BASE_URL + "/" + id, { headers: headers });
    }
    //book added to wishlist
    //addtoWishlist

    //delete book from wishlist
    deleteWishlist(id,wid) {
        return axios.delete(USER_BASE_URL + "/wishlist" + "/" + id+ '/'+wid, { headers: headers });
    }
}
export default new UserService();
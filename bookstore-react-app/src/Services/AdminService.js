import axios from "axios"
const USER_BASE_URL = "http://localhost:4507/admin"
const headers = {
    "Content-Type": "application/json",
    Authorization: "Token " + localStorage.getItem("token")

}
class AdminService {
    //loginUser(email,password)
    loginAdmin(credentials) {
        return axios.post(USER_BASE_URL + "/login", credentials);

    }

    //redirect to home page
    HomeAdmin() {
        return axios.post(USER_BASE_URL + "/home", { headers: headers })
    }

    //getuser
    getAdmin() {
        //console.log(headers);
        return axios.get(USER_BASE_URL, { headers: headers });
    }

    getAdminById(id) {
        //console.log(headers);
        return axios.get(USER_BASE_URL + "/wishlist/" + id, { headers: headers });
    }

    //post user
    postAdmin(users) {
        return axios.post(USER_BASE_URL + "/signup", users, { headers: headers });
    }

    //delete user
    deleteAdmin(id) {
        return axios.delete(USER_BASE_URL + "/" + id, { headers: headers });
    }
    //book added to wishlist
    addBookbyAdmin(bookdata) {
        return axios.post(USER_BASE_URL + "/add", bookdata);
    }
    //delete book
    deleteBookbyAdmin(bookid) {
        return axios.delete(USER_BASE_URL + "/remove" + "/" + bookid, { headers: headers });
    }
}
export default new AdminService();
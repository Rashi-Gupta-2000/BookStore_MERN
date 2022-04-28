import axios from "axios"
const USER_BASE_URL = "http://localhost:4505/book"
// const headers = {
//     "Content-Type": "application/json",
//     Authorization: "Token " + localStorage.getItem("token")

// }
class BookService {
    //loginUser(email,password)
    // loginUser(credentials) {
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
        // return axios.post(USER_BASE_URL + "/login", credentials);

    
    //getbook
    getBook() {
        //console.log(headers);
        // return axios.get(USER_BASE_URL);
        return axios.get(USER_BASE_URL).then((res)=>{
            console.log(res);
        })
        .catch((err)=>{
            console.log(err);
        });
    }

    getBookById(id) {
        //console.log(headers);
        return axios.get(USER_BASE_URL + "/" +id);
    }

    //postbook
    // postBook(users) {
    //     return axios.post(USER_BASE_URL, {book}, { headers: headers });
    // }

    //deletebook
    // deleteBook(id) {
    //     return axios.delete(USER_BASE_URL + "/" + id, { headers: headers });
    // }

}
export default new BookService();
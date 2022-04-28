import axios from "axios"
const USER_BASE_URL = "http://localhost:4500/book"

class BookService {
    //get content of the book
    getContent(id){
        return axios.get(USER_BASE_URL + "/" + id + "/content")
    }
}

export default new BookService();
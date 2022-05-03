import { createStore } from 'redux'

const initialState = {
    email: "",
    password: "",
    isLogged: "",
    users: [],
    fullname: "",
    useremail: "",
    userpassword: "",
    books: {},
    wishlist: [],
    user_name: "",
    title: "",
    author: "",
    category: "",
    likes_count: 0,
    summary: "",
    content: "",
    img: "",
    selectedCategory: "",
    search: ""
};
const bookReducer = (state = initialState, action) => {
    if (action.type === "email")
        return {
            ...state,
            email: action.value,
        }
    if (action.type === "img")
        return {
            ...state,
            img: action.value,
        }
    if (action.type === "selectedCategory")
        return {
            ...state,
            selectedCategory: action.value,
        }
    if (action.type === "searchtitle")
        return {
            ...state,
            search: action.value,
        }
    if (action.type === "password")
        return {
            ...state,
            password: action.value,
        }
    if (action.type === "logged")
        return {
            ...state,
            isLogged: action.value,
        };
    if (action.type === "users")
        return {
            ...state,
            users: action.value,
        };
    if (action.type === "books")
        return {
            ...state,
            books: action.value,
        };
    if (action.type === "wishlist")
        return {
            ...state,
            wishlist: action.value,
        };

    if (action.type === "user_name")
        return {
            ...state,
            user_name: action.value,
        };
    if (action.type === "fullname")
        return {
            ...state,
            fullname: action.value,
        };

    if (action.type === "useremail")
        return {
            ...state,
            useremail: action.value,
        };

    if (action.type === "title")
        return {
            ...state,
            title: action.value,
        }
    if (action.type === "author")
        return {
            ...state,
            author: action.value,
        }
    if (action.type === "category")
        return {
            ...state,
            category: action.value,
        };
    if (action.type === "likes_count")
        return {
            ...state,
            likes_count: action.value,
        };
    if (action.type === "summary")
        return {
            ...state,
            summary: action.value,
        };

    if (action.type === "content")
        return {
            ...state,
            content: action.value,
        };
    return state;
};

const bookStore = createStore(bookReducer);

export default bookStore;

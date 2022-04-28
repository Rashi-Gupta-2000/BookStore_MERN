This is an online library mamangement app where users can rent books for a specific time, like them and can also review books. This will have 2 interfaces.

- User Inerface
- Admin Interface

Users registered for this application can
- browse books from the library
- filter them based on category, author, publcations etc..
- Like book
<!-- - Review a book  -->
<!-- - Categorize the books according to the arrival time  -->
<!-- - Pay & Rent them for a specific duration -->

# Later
Admin of this application can
- Add a new book to the lot
- List/manage books
<!-- - Track rented books and their availability -->


LOGIN / SIGNUP -- using google,facebook
LOGOUT

PAGES 
- welcome page with navbar --> buttons signin/signup
- for a new user -> signup page -> signin page
- for a already existing user -> signin page
- after signin -> home page -> (books listing)

- home page
    - navbar -> home button, logout button, readlist button, delete account
        <!-- search button, filter book button, -->

- card of each book 
    - cover page image of book 
    - heart icon near the book for like the book -> increment the like count
    - readme button -> ridirect to a dynamic url different for every book, back button
    - Add to readlist button -> redirect to wishlist page -> list of the books added to the readlist

Day#1 --> 27 April
created Schema for book and user 
UserService created -> signup, signin,remove user -> routes created 
authentication provided by jwt authorization 
BookService created -> list, add, delete -> routes 
Wishlist routes and services added

Day#2 --> 28 April
Welcome page -> image, buttons signup/signin (navbar)
Signup -> Signin page 
Home page Navbar, book listing(card)

LOGOUT ISSUE SOLVED:
After signup we do not get a token we generate a token after signin so for signout we will delete the token and generate a new token after every signin.
// import React, {useState} from "react";
// import { useHistory, Link } from "react-router-dom";
// import axios from "axios";


// const NavBar = (props) => {
//     const [book, setBook] = useState("");
//     const [key, setKey] = useState("AIzaSyA-sOXUVyQCWTWlMymoPQDT_yveRsNYmCU");
//     const [results, setResults] = useState([]);
//     const history = useHistory();


//     const onSubmitHandler = (event) => {
//         event.preventDefault();

//         axios.get("https://www.googleapis.com/books/v1/volumes?q=" + book + "&filter=ebooks&key=" + key + "&maxResults=40")
//             .then(res => {
//                 console.log(res.data.items);
//                 setResults(res.data.items);
//                 history.push("/")
//             })
//             .catch(err => {
//                 console.log(err);
//             })
//     }

//     return (
//         <div>
//             <div className="nav">
//                 <form onSubmit={onSubmitHandler} className="form mx-auto">
//                     <div >
//                         <input value={book} type="text" name="book" onChange={(event) => { setBook(event.target.value) }} className="form-control" placeholder="Search for a book.." />
//                     </div>
//                     <input className="btn btn-danger" type="submit" value="Search" />
//                 </form>
//                 <Link to="/author"><p>Search by Author</p></Link>
//             </div>
//         </div>
//     )
// }

// export default NavBar;
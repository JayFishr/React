import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link, useHistory } from 'react-router-dom';
import Books from "../components/Books";

const Author = (props) => {
    const [author, setAuthor] = useState("");
    const [results, setResults] = useState([]);
    const [key, setKey] = useState("AIzaSyA-sOXUVyQCWTWlMymoPQDT_yveRsNYmCU");
    const history = useHistory();

    const onSubmitHandler = (event) => {
        event.preventDefault()

        axios.get("https://www.googleapis.com/books/v1/volumes?q=inauthor:" + author + "&filter=paid-ebooks&key=" + key + "&maxResults=40")
            .then(res => {
                console.log(res.data.items);
                setResults(res.data.items);
                setAuthor("");
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div>
            <div className="nav">
                <div >
                    <Link to="/" className="head">
                        <h1>The Book Wiki</h1>
                    </Link>
                </div>
                <form onSubmit={onSubmitHandler} className="form mx-auto">
                    <div>
                        <input value={author} type="text" name="author" onChange={(event) => { setAuthor(event.target.value) }} className="form-control" placeholder="Search for an author.." />
                    </div>
                    <input className="btn btn-danger" type="submit" value="Search" />
                </form>
                <Link className="link" to="/"><p>Search by Book</p></Link>
            </div>
            <div className="bookDisplay mx-auto">
                <Books results={results} />
            </div>
        </div>
    )
}

export default Author;

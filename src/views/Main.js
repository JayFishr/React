import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Books from '../components/Books';


const Main = (props) => {
    // const { results } = props;
    const [book, setBook] = useState("");
    const [key, setKey] = useState("");
    const [results, setResults] = useState([]);
    // const [errors, setErrors] = useState("")

    const onSubmitHandler = (event) => {
        event.preventDefault();

        axios.get("https://www.googleapis.com/books/v1/volumes?q=" + book + "&filter=paid-ebooks&key=" + key + "&maxResults=40")
            .then(res => {
                console.log(res);
                setResults(res.data.items);
                setBook("");
                // setErrors("");
            })
            .catch(err => {
                console.log(err);
                // setErrors(err.response.data);
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
                        <input value={book} type="text" name="book" onChange={(event) => { setBook(event.target.value) }} className="form-control" placeholder="Search for a book.." />
                    </div>
                    <input className="btn btn-danger" type="submit" value="Search" />
                </form>
                <Link className="link" to="/author"><p>Search by Author</p></Link>
            </div>
            <div className="bookDisplay mx-auto">
                <Books results={results} />
            </div>
        </div>
    )
}

export default Main;

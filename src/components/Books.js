import React from 'react';

const Books = (props) => {
    const { results } = props;


    return (
        <div className="container">
            {
                results.map((item, i) => {
                    return <div key={i} className="card mb-3" >
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={item.volumeInfo.imageLinks.thumbnail} className="img-fluid rounded-start" alt={item.volumeInfo.title} />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5  className="card-title">Title: {item.volumeInfo.title}</h5>
                                    <p className="card-text">Author(s): {item.volumeInfo.authors.map((item, i) => { return <p key={i}>{item}</p> })}</p>

                                    <p className="card-text"><small className="text-muted">Publisher: {item.volumeInfo.publisher}</small></p>

                                    <a className="btn btn-success btn-sm mb-2" href={`${item.volumeInfo.previewLink}`} onClick={()=>{alert("You are now being sent to a different site.")}}>Read Preview</a>

                                    <a href={`${item.saleInfo.buyLink}`} onClick={()=>{alert("You are now being sent to a different site.")}}>
                                    <p className="card-text"><small className="">Price: ${item.saleInfo.retailPrice ? item.saleInfo.retailPrice.amount ||item.saleInfo.listPrice.amount : "Not available for purchase"}</small></p></a>
                                </div>
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default Books;
import Header from "../components/Header";
import Main from "../components/Main";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Products() {
    const productsList = 'https://fakestoreapi.com/products';
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get(productsList)
            .then(response =>
                setProducts(response.data))
            .catch(error =>
                console.error(error));
    }, []);
    return (
        <>
            <Header />
            <Main />
            <div className="container">
                <div className="intro d-flex justify-content-between">
                    <h2>I nostri prodotti</h2>
                    <a href="#"><i className="bi bi-cart4 text-black fs-1"></i></a>
                </div>
                <hr />
                <div className="row d-flex flex-wrap">
                    {
                        products.map(product => (
                            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                                <div className="card" key={product.id}>
                                    <img src={product.image} className="card-img-top p-3" alt="" />
                                    <div className="card-body">
                                        <h5 className="card-title">{product.title}</h5>
                                        <p className="card-text">{product.description}</p>
                                        <a href="#" className="btn btn-dark"><i className="bi bi-cart-plus"></i></a>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
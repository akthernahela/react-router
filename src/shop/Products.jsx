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
                <div className="row">
                    {
                        products.map(product => (
                            <div class="card" style="width: 18rem;" key={product.id}>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
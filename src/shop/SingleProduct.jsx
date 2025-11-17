import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";


export default function SingleProduct() {
    const { id } = useParams()
    const [product, setProduct] = useState({});

    function findProduct() {
        axios.get(`https://fakestoreapi.com/products${id}`)
            .then(response =>
                setProduct(response.data))
            .catch(error =>
                console.error(error));
    }
    useEffect(findProduct, [id])

    return (
        <>
            <div className="col">
                <div className="card h-100 d-flex flex-column" key={product.id}>
                    <img src={product.image} className="card-img-top p-3 mx-auto" alt="" />
                    <div className="card-body d-flex flex-column">
                        <h5 className="card-title">{product.title}</h5>
                        <p className="card-text mt-3">Price: {product.price} €</p>
                        <Link className='btn btn-dark mt-auto' to="/products">
                            <i className="bi bi-cart-plus"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
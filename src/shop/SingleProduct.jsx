import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


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
            <h1>Id: {id}</h1>
            <h2>{product.title}</h2>
            <p>{product.price} €</p>
            <img src={product.image} alt={product.title} width={200} />
        </>
    )
}
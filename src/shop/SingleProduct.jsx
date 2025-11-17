import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function SingleProduct() {
    const { id } = useParams()
    const [product, setProduct] = useState({});
    const productsList = 'https://fakestoreapi.com/products';

    function findProduct() {
        axios.get(productsList)
            .then(response =>
                setProduct(response.data))
            .catch(error =>
                console.error(error));
    }
    useEffect(findProduct, [])

    return (
        <>
            <h1>Id: {id}</h1>
        </>
    )
}
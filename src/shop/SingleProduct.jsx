import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function SingleProduct() {
    const { id } = useParams()
    const [product, setProduct] = useState({});
    const productsList = 'https://fakestoreapi.com/products';

    function findProduct() {
        axios.ge
    }

    return (
        <>
            <h1>Id: {id}</h1>
        </>
    )
}
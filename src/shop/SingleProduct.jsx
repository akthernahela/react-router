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

        </>
    )
}
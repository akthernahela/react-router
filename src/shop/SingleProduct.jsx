import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function SingleProduct() {
    const { id } = useParams()
    const [product, setProduct] = useState({});

    function findProduct() {

    }

    return (
        <>
            <h1>Id: {id}</h1>
        </>
    )
}
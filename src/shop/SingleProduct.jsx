import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function SingleProduct() {
    const { id } = useParams()
    return (
        <>
            <h1>Id: {id}</h1>
        </>
    )
}
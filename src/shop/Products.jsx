import Header from "../components/Header";
import Main from "../components/Main";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Products() {
    const prodcutsList = 'https://fakestoreapi.com/products';

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

            </div>
        </>
    )
}
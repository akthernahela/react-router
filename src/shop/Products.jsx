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
        </>

    )
}
import axios from "axios";
import { useEffect, useState } from "react";


export default function Main() {
    const prodcutsList = 'https://fakestoreapi.com/products';


    return (
        <>
            <main className="container">
                <div className="titleBox">
                    <h1>Mix&Buy</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Id, voluptatem modi officiis consequatur eveniet aut tempora in?
                        Explicabo corporis quidem omnis commodi doloribus,
                        neque ut aliquam, sapiente natus, nam autem.
                    </p>
                </div>
                <h2>I nostri prodotti</h2>
                <hr />
                <ul></ul>
            </main>
        </>
    )
}
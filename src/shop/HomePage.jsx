import Header from "../components/Header";
import ShopBackground from "../components/ShopBackground";


export default function HomePage() {

    return (
        <>
            <Header />
            <div class="card text-bg-dark">
                <ShopBackground />
                <div class="card-img-overlay">
                    <h1 class="card-title">Mix&Buy</h1>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text"><small>Last updated 3 mins ago</small></p>
                </div>
            </div>
        </>

    )
}
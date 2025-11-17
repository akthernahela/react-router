import Header from "../components/Header";
import ShopBackground from "../components/ShopBackground";
import Footer from "../components/Footer";


export default function HomePage() {

    return (
        <>
            <Header />
            <div className="card">
                <ShopBackground />
            </div>
            <Footer />
        </>

    )
}
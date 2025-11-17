import { Link } from "react-router-dom";
export default function Footer() {

    return (
        <footer>
            <div className="container">
                <div className="row d-flex justify-content-around">
                    <div className="col">
                        <h4>Mix & Buy</h4>
                    </div>
                    <div className="col">
                        <a href="">
                            <Link to="/" className="nav-link" aria-current="page">Home</Link>
                        </a>
                        <a href="">
                            <Link to="/" className="nav-link" aria-current="page">Home</Link>
                        </a>
                        <a href="">
                            <Link to="/" className="nav-link" aria-current="page">Home</Link>
                        </a>
                    </div>
                    <div className="col">
                        <a href="">
                            <Link to="/" className="nav-link" aria-current="page">Home</Link>
                        </a>
                        <a href="">
                            <Link to="/" className="nav-link" aria-current="page">Home</Link>
                        </a>
                        <a href="">
                            <Link to="/" className="nav-link" aria-current="page">Home</Link>
                        </a>
                        <a href="">
                            <Link to="/" className="nav-link" aria-current="page">Home</Link>
                        </a>
                        <a href="">
                            <Link to="/" className="nav-link" aria-current="page">Home</Link>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
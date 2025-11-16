import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "./shop/HomePage";
import AboutUs from "./shop/AboutUs";
import Products from "./shop/Products";

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/aboutUs' element={<AboutUs />} />
          <Route path='/products' element={<Products />} />
        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App

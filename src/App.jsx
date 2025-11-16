import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "./shop/HomePage";

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/aboutUs' element={<HomePage />} />
          <Route path='/products' element={<HomePage />} />
        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App

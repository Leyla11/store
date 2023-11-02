import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Products from "./pages/Products"
import DetailProduct from "./components/DetailProduct"

const RootRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/products/:idProduct" element={<DetailProduct/>}/>
    </Routes>
  )
}

export default RootRoutes
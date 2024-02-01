import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/home/Home";
import Layout from "./Components/global/Layout";
import ProductDescription from "./Components/productDescription/ProductDescription";
import ProductsProvider from "./provider/ProductsProvider";
import Cart from "./Components/cart/Cart";
import CartProvider from './provider/CartProvider'
import ProductManagement from "./Components/productManagement/ProductManagement";
import NewProduct from "./Components/productManagement/NewProduct";
import EditProduct from "./Components/productManagement/EditProduct";


function App() {
  return (
    <ProductsProvider>
      <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/product/:slug" element={<ProductDescription />} />
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/product-management" element={<ProductManagement/>}/>
            <Route path="/product-management/edit/:slug" element={<EditProduct/>}/>
            <Route path="/product-management/new" element={<NewProduct/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
      </CartProvider>
    </ProductsProvider>
  );
}

export default App;

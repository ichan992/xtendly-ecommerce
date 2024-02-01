import React, { useContext } from 'react'
import ProductForm from '../global/ProductForm'
import { ProductsContext } from "../../context/ProductsContext";
import { useNavigate } from 'react-router-dom';
export default function NewProduct() {
  const { addProduct } = useContext(ProductsContext);

  const navigate = useNavigate();

  const AddProduct = (product) => {
    addProduct(product);
    navigate('/product-management')
  };
  
  return (
    <ProductForm submit={AddProduct}/>
  )
}

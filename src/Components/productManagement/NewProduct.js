import React, { useContext } from 'react'
import ProductForm from '../global/ProductForm'
import { ProductsContext } from "../../context/ProductsContext";
export default function NewProduct() {
  const { addProduct } = useContext(ProductsContext);

  const AddProduct = (product) => {
    addProduct(product);
  };
  
  return (
    <ProductForm submit={AddProduct}/>
  )
}

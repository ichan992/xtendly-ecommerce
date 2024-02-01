import React, { useState } from "react";
import { ProductsContext } from "../context/ProductsContext";
import { dummyData } from "../Products";
export default function ProductsProvider({ children }) {
  const [products, setProducts] = useState(dummyData);

  const searchProduct = (slug) => {
    const result = products.filter((product) =>
      product.slug.includes(slug.toLowerCase())
    );
    return result;
  };

  const addProduct = (newProduct) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };
  const updateProduct = (updatedProduct) => {
    
    setProducts((prevProducts) => {
      const updatedProducts = prevProducts.map((product) => {
        if (product.slug === updatedProduct.slug) {
          return { ...product, ...updatedProduct };
        }
        return product;
      });
      return updatedProducts;
    });
  };

  return (
    <ProductsContext.Provider
      value={{ products, setProducts, searchProduct, addProduct, updateProduct }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

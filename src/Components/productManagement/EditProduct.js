import React, { useContext, useEffect, useState } from "react";
import { useLastIndexFromUrl } from "../../helpers/useLastIndexFromUrl";
import { ProductsContext } from "../../context/ProductsContext";
import ProductForm from "../global/ProductForm";
import { useNavigate } from "react-router-dom";
export default function EditProduct() {
  const [product, setProduct] = useState(null);
  const { searchProduct, updateProduct } = useContext(ProductsContext);
  const navigate = useNavigate();
  const slug = useLastIndexFromUrl();
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (slug) {
          const result = await searchProduct(slug);
          setProduct(result[0]);
        }
      } catch (error) {}
    };
    fetchData();
  }, [slug, searchProduct]);

  const updateSubmit = (product) => {
    updateProduct(product);
    navigate('/product-management')
  
  };
  
  if (product) {
    return <ProductForm submit={updateSubmit} product={product} />;
  }
}

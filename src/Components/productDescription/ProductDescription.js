import React, { useContext, useState } from "react";
import { useLastIndexFromUrl } from "../../helpers/useLastIndexFromUrl";
import { ProductsContext } from "../../context/ProductsContext";
import Button from "../global/Button";
import QuantityInput from "../global/QuantityInput";
import ProductHeader from "./ProductHeader";
import ProductThumbnail from "./ProductThumbnail";
import { CartContext } from "../../context/CartContext";
import Description from "./Description";
export default function ProductDescription() {
  const [product, setProduct] = useState(null);
  const {cartDispatch} = useContext(CartContext)
  const [quantity, setQuantity] = useState(1);
  const { searchProduct } = useContext(ProductsContext);
  const slug = useLastIndexFromUrl();

  React.useEffect(() => {
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
  
  const AddToCart = () => {
      let item = {
        thumbnail : product.thumbnail,
        product_name : product.product_name,
        slug: product.slug,
        qty: quantity,
        price: product.price
      }
      cartDispatch({type:'ADD_TO_CART',item : item})
  }

  if (product) {
    return (
      <div className="2xl:grid 2xl:grid-cols-3 2xl:p-0 xl:p-0 p-5">
        <div className="w-full lg:col-span-2">
          <div className="top-0 sticky ">
            <ProductThumbnail productThumbnail={product.thumbnail} />
          </div>
        </div>
        <div className=" h-full w-full py-5 pr-10  xl:ml-10 2xl:ml-0 ">
          <div className=" top-0 sticky space-y-3">
            <ProductHeader
              ProductName={product.product_name}
              Category={product.category}
              Price={product.price}
            />
            <div className="flex flex-col space-y-5 w-full ">
              <div className="space-y-2 w-24">
                <h1 className="font-medium">Quantity</h1>
                <QuantityInput
                  inputValue={quantity}
                  setInputValue={setQuantity}
                />
              </div>
              <Button onClick={AddToCart} hover={true} type={"filled"} title={"Add to Bag"} />
              <Description description={product.description}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return null;
}

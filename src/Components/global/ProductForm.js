import React, { useState } from "react";
import Button from "./Button";
import ProductCard from "./ProductCard";
import { generateSlug } from "../../helpers/helpers";

export default function ProductForm( { submit ,product = {} }) {
  const [thumbnailLink, setThumbnailLink] = useState(product.thumbnail);
  const [productName, setProductName] = useState(product.product_name);
  const [price, setPrice] = useState(product.price);
  const [description, setDescription] = useState(product.description);
  const [category, setCategory] = useState(product.category);
  
  const onSubmit = () => {
    if(thumbnailLink !=null && productName !=null && price !=null  && description !=null && category !=null ){
      let item = {
        thumbnail: thumbnailLink,
        product_name: productName,
        price: price,
        slug : product.slug ?? generateSlug(productName) ,
        category: category,
      };
  
      submit(item);
      setThumbnailLink(null)
      setProductName(null)
      setPrice(null)
      setDescription(null);
      setCategory(null)
    }
    
  };
  
  return (
    <div className="flex flex-row space-x-10 m-10">
      <div className="w-full max-w-xs justify-center items-center ">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Product Image
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            value={thumbnailLink}
            onChange={(e) => setThumbnailLink(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Product name
          </label>
          <input
            className="shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="product_name"
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Category
          </label>
          <input
            className="shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="product_name"
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="price"
          >
            Price
          </label>
          <input
            className="shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="price"
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="textarea"
          >
            Description
          </label>
          <textarea
            className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="textarea"
            type="textarea"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <Button onClick={onSubmit} title="submit" type="filled" />
        </div>
      </div>
      <div>
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="example-output"
        >
          Example Output
        </label>
        <ProductCard
          product={{
            thumbnail:
              thumbnailLink ?? "https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png",
            product_name: productName ?? "",
            price: price ?? 0,
            category: category ?? "Sample Category",
          }}
        />
      </div>
    </div>
  );
}

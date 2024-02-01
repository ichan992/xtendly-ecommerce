import React, { useState } from "react";
import Button from "./Button";
import ProductCard from "./ProductCard";
import { generateSlug } from "../../helpers/helpers";

export default function ProductForm({ submit, product = {} }) {
  const [thumbnailLink, setThumbnailLink] = useState(product.thumbnail);
  const [productName, setProductName] = useState(product.product_name);
  const [price, setPrice] = useState(product.price);
  const [description, setDescription] = useState(product.description);
  const [category, setCategory] = useState(product.category);

  const [thumbnailError, setThumbnailError] = useState(false);
  const [categoryError, setCategoryError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);
  const [priceError, setPriceError] = useState(false);
  const [productNameError, setProductNameError] = useState(false);

  const validateEntry = () => {
    return new Promise((resolve, reject) => {
      if (!thumbnailLink) {
        setThumbnailError(true);
        reject("Thumbnail link is required.");
      }
      if (!category) {
        setCategoryError(true);
        reject("Category is required.");
      }
      if (!description) {
        setDescriptionError(true);
        reject("Description is required.");
      }
      if (!price ||isNaN(price)) {
        setPriceError(true);
        reject("Price is required.");
      }

      if (!productName) {
        setProductNameError(true);
        reject("Product name is required.");
      } else {
        resolve();
      }
    });
  };

  const onSubmit = () => {
    validateEntry()
      .then(() => {
        if (
          thumbnailLink != null &&
          productName != null &&
          price != null &&
          description != null &&
          category != null
        ) {
          let item = {
            thumbnail: thumbnailLink,
            product_name: productName,
            price: price,
            slug: product.slug ?? generateSlug(productName),
            category: category,
          };
          submit(item);
          setThumbnailLink(null);
          setProductName(null);
          setPrice(null);
          setDescription(null);
          setCategory(null);
        } else {
          console.log("Invalid entry. Please fill in all required fields.");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="flex 2xl:flex-row xl:flex-row md:flex-col 2xl:space-y-0  2xl:space-x-10 xl:space-x-10 md:space-x-0 m-10 flex-col space-y-5 ">
      <div className="w-full max-w-xs justify-center items-center ">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="product_image"
          >
            Product Image
          </label>
          <input
            className={`shadow ${
              thumbnailError ? "border border-red-500" : ""
            } appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
            id="product_image"
            type="text"
            value={thumbnailLink}
            onChange={(e) => {
              setThumbnailLink(e.target.value);
              setThumbnailError(false); // Reset thumbnail error on input change
            }}
          />
          {thumbnailError && (
            <p className="text-red-500 text-xs italic">Error in Thumbnail.</p>
          )}
        </div>

        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="product_name"
          >
            Product name
          </label>
          <input
            className={`shadow ${
              productNameError ? "border border-red-500" : ""
            } appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline`}
            id="product_name"
            type="text"
            value={productName}
            onChange={(e) => {
              setProductName(e.target.value);
              setProductNameError(false); // Reset product name error on input change
            }}
          />
          {productNameError && (
            <p className="text-red-500 text-xs italic">
              Error in Product Name.
            </p>
          )}
        </div>

        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="category"
          >
            Category
          </label>
          <input
            className={`shadow ${
              categoryError ? "border border-red-500" : ""
            } appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline`}
            id="category"
            type="text"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              setCategoryError(false); // Reset category error on input change
            }}
          />
          {categoryError && (
            <p className="text-red-500 text-xs italic">Error in Category.</p>
          )}
        </div>

        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="price"
          >
            Price
          </label>
          <input
            className={`shadow ${
              priceError ? "border border-red-500" : ""
            } appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline`}
            id="price"
            type="text"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
              setPriceError(false); // Reset price error on input change
            }}
          />
          {priceError && (
            <p className="text-red-500 text-xs italic">Error in Price.</p>
          )}
        </div>

        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="textarea"
          >
            Description
          </label>
          <textarea
            className={`shadow ${
              descriptionError ? "border border-red-500" : ""
            } appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline`}
            id="textarea"
            type="textarea"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
              setDescriptionError(false); // Reset description error on input change
            }}
          />
          {descriptionError && (
            <p className="text-red-500 text-xs italic">Error in Description.</p>
          )}
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
              thumbnailLink ??
              "https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png",
            product_name: productName ?? "",
            price: price ?? 0,
            category: category ?? "Sample Category",
          }}
        />
      </div>
    </div>
  );
}

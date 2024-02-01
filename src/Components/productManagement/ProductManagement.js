import React, { useMemo, useState, useContext } from "react";
import ProductCard from "../global/ProductCard";
import { ProductsContext } from "../../context/ProductsContext";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";
import Filter from "../global/Filter";
import Button from "../global/Button";
import { useNavigate } from "react-router-dom";
export default function ProductManagement() {
  const { products } = useContext(ProductsContext);
  const navigate = useNavigate();
  const [showFilters, setShowFilters] = useState(true);
  const [sortBy, setSortBy] = useState("all");
  const [priceFilter, setPriceFilter] = useState(null);


  const filteredProducts = useMemo(() => {
    let filtered = [...products];
    if (priceFilter !== null) {
      if (priceFilter.startsWith("Under")) {
        const rangeNumber = priceFilter.split(" ")[1].replace(/[^\d.]/g, "");
        filtered = filtered.filter(
          (product) => product.price < parseInt(rangeNumber)
        );
      }
      if (priceFilter.startsWith("Over")) {
        const rangeNumber = priceFilter.split(" ")[1].replace(/[^\d.]/g, "");
        filtered = filtered.filter(
          (product) => product.price >= parseInt(rangeNumber)
        );
      }
      if (!priceFilter.startsWith("Over") && !priceFilter.startsWith("Under")) {
        const min = priceFilter.split("-")[0].replace(/[^\d.]/g, "");
        const max = priceFilter.split("-")[1].replace(/[^\d.]/g, "");

        filtered = filtered.filter(
          (product) =>
            product.price > parseInt(min) && product.price < parseFloat(max)
        );
      }
    }
    if (sortBy === "Newest") {
      filtered.sort((a, b) => a.date - b.date);
    } else if (sortBy === "Price: High-Low") {
      filtered.sort(
        (currentProduct, NextProduct) =>
          NextProduct.price - currentProduct.price
      );
    } else if (sortBy === "Price: Low-High") {
      filtered.sort(
        (currentProduct, NextProduct) =>
          currentProduct.price - NextProduct.price
      );
    }
    return filtered;
  }, [products, priceFilter, sortBy]);

  return (
    <div className="p-5 lg:p-10 md:p-24 space-y-5">
      <div className="flex flex-col lg:flex-row justify-between w-[90%]  ">
        <div className="space-y-3">
          <h1 className="text-xl font-semibold text-black">
            Product Management
          </h1>
          <Button onClick={()=>navigate('/product-management/new')} title="Add new product" type="filled" />
        </div>
        <div
          onClick={() => setShowFilters((prev) => !prev)}
          className="flex flex-row  space-x-2"
        >
          <p>{!showFilters ? "Show Filter" : "Hide Filter"}</p>
          <AdjustmentsHorizontalIcon className="h-6 w-6 " />
        </div>
      </div>
      <div
        className={`flex flex-col lg:flex-row w-full md:space-y-5 ${
          showFilters
            ? "transform translate-x-0 duration-700"
            : "transform  ease-in duration-700 collpase"
        } `}
      >
        <div
          className={`${
            !showFilters
              ? "hidden"
              : "lg:w-56 w-full h-[100%] lg:sticky top-0 space-y-5 "
          } `}
        >
          <Filter
            onSelect={setSortBy}
            title={"Sort By"}
            data={["Newest", "Price: High-Low", "Price: Low-High"]}
          />
          <Filter
            onSelect={setPriceFilter}
            title={"Shop By Price"}
            data={[
              "Under ₱7,000",
              "₱1000 - ₱6,000",
              "₱6,000 - ₱7,000",
              "Over ₱10,000",
            ]}
          />
        </div>
        <div className="w-full">
          <div className="flex flex-wrap">
            {filteredProducts.map((product, index) => (
              <div
                key={index}
                className="mx-3 2xl:w-[350px] xl:w-[350px] md:w-[350px] w-full sm:w-64 "
              >
                <ProductCard navigate={`/product-management/edit/${product.slug}`} index={index} product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

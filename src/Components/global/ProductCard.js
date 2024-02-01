import React from "react";
import { ConvertNumberFormat } from '../../helpers/helpers'
import { Link } from "react-router-dom";


export default function ProductCard({ navigate, product, index }) {
  return (
    <div className=" px-3 w-[320px] " key={product.product_name}>
      <Link
        to={navigate}
        className=" w-full"
      >
          <img
            src={product.thumbnail}
            className="max-h-[300px] min-h-[300px] min-w-[300px]"
            style={{ objectFit:"cover"}}
            alt=""
          />
    
        <div className="p-1"></div>
        <div className="pl-2 mb-8">
          <p>{product.product_name}</p>
          <p className="text-gray-500">{product.category}</p>
          <div className="flex flex-row space-x-2 w-full overflow-hidden">
            <p className="font-semibold">{ConvertNumberFormat(product.price)}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

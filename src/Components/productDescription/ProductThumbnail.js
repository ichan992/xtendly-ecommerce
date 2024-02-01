import React from "react";
function ProductThumbnail({ productThumbnail }) {
  return (
    <div className=" flex items-center justify-center  ">
      <div className="2xl:m-5 xl:m-5 lg:m-0 m-0">
        <img
          className=""
          alt=""
          fill={true}
          style={{ objectFit: "contain" }}
          src={productThumbnail}
        />
      </div>
    </div>
  );
}
export default React.memo(ProductThumbnail);

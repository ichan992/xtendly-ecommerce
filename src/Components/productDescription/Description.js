import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
export default function Description() {
  const [showFilter, setShowFilters] = useState(true);
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center w-full lg:w-[100%] ">
        <div
          onClick={() => setShowFilters((prev) => !prev)}
          className="flex flex-row  justify-between border-t-[0.5px] p-5 w-full "
        >
          <h1 className="font-bold ">Description</h1>
          {showFilter ? (
            <ChevronUpIcon className="w-6 h-6 " />
          ) : (
            <ChevronDownIcon className="w-6 h-6 " />
          )}
        </div>
        {showFilter && (
          <div className="p-5 text-justify">
            The Nike Sportswear Premium Essentials T-Shirt has a loose fit for a
            carefree, comfortable look. Its heavyweight organic cotton fabric
            feels thick and soft. This product is made from at least 75% organic
            cotton fibres. The Nike Sportswear Premium Essentials T-Shirt has a
            loose fit for a carefree, comfortable look. Its heavyweight organic
            cotton fabric feels thick and soft. This product is made from at
            least 75% organic cotton fibres. The Nike Sportswear Premium
            Essentials T-Shirt has a loose fit for a carefree, comfortable look.
            Its heavyweight organic cotton fabric feels thick and soft. This
            product is made from at least 75% organic cotton fibres. The Nike
            Sportswear Premium Essentials T-Shirt has a loose fit for a
            carefree, comfortable look. Its heavyweight organic cotton fabric
            feels thick and soft. This product is made from at least 75% organic
            cotton fibres. The Nike Sportswear Premium Essentials T-Shirt has a
            loose fit for a carefree, comfortable look. Its heavyweight organic
            cotton fabric feels thick and soft. This product is made from at
            least 75% organic cotton fibres.
          </div>
        )}
      </div>
    </div>
  );
}

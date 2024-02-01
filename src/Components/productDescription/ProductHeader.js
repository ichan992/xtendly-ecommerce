import React from "react";
import { ConvertNumberFormat } from "../../helpers/helpers";

export default function ProductHeader({
  ProductName,
  Category,
  Price,
}) {
  return (
    <div className="space-y-3">
      <div>
          <p className="text-4xl font-semibold">{ProductName}</p>
          <h1>{Category}</h1>
      </div>
      <div className="text-lg font-semibold">
        <p>{ConvertNumberFormat(Price)}</p>
      </div>
    </div>
  );
}

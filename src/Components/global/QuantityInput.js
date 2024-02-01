import React from "react";
export default function QuantityInput({ inputValue, setInputValue }) {
  const handleQuantityInput = (event) => {
    const value = event.target.value;
    if (parseFloat(value) !== 0 && value !== "") {
      setInputValue(parseInt(value));
    } else {
      setInputValue(1);
    }
  };
  return (
    <>
      <input
        defaultValue={1}
        min={1}
        value={inputValue}
        onChange={(event) => handleQuantityInput(event)}
        className="w-full h-10 border-[1px] pl-3 border-gray-600 border-opacity-80  "
        type="number"
      />
    </>
  );
}

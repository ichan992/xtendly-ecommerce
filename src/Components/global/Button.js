import React from "react";

export default function Button({ title, type, hover, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`w-full ${
        type === "outline"
          ? ` ${hover && "hover:bg-black hover:text-white"}`
          : `${
              hover &&
              "hover:bg-transparent hover:text-black hover:border-black"
            } bg-black  text-white`
      } border-black transition ease-in font-semibold border-2 p-3 tracking-widest `}
    >
      {title}
    </button>
  );
}

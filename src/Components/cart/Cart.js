import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { ConvertNumberFormat } from "../../helpers/helpers";
import Button from "../global/Button";

export default function Cart() {
  const { cartState, cartDispatch } = useContext(CartContext);

  const handleQuantityInput = (event, item) => {
    const value = event.target.value;
    if (value !== "" && parseFloat(value) !== 0) {
      cartDispatch({
        type: "UPDATE_CART",
        item: item,
        qty: value,
      });
    }
  };
  const getSubTotal = React.useMemo(() => {
    return cartState.reduce((acc, current) => {
      const { price, qty } = current;
      const ItemTotal = price * qty;
      return acc + ItemTotal;
    }, 0);
  }, [cartState]);

  return (
    <div className="flex 2xl:flex-row md:flex-row flex-col justify-start 2xl:mx-64 xl:mx-56 md:mx-10 mx-0 my-10 space-x-10  ">
      <div className="2xl:w-[50%] xl:w-[50%] md:w-[50%] w-full border-[0.5px] p-10 ">
        <div className="top-0 sticky ">
          { cartState.length >=1 ? cartState.map((item) => (
            <>
              <div key={item.slug} className=" flex row  w-full  mb-5 ">
                <div className="relative w-64 h-full ">
                  <img
                    src={item.thumbnail}
                    fill
                    style={{ objectFit: "cover" }}
                    alt=""
                  />
                </div>
                <div className="flex flex-col px-3 w-full justify-between ">
                  <div>
                    <p className="font-semibold text-xl">
                      {item.product_name}{" "}
                    </p>
                    <p className="text-lg opacity-80">
                      {ConvertNumberFormat(item.price * item.qty ?? 0)}
                    </p>
                  </div>
                  <div className="flex row text-center w-full ">
                    <input
                      type="number"
                      min={1}
                      value={item.qty}
                      onChange={(event) => handleQuantityInput(event, item)}
                      className="w-16 border-[1px] text-center border-gray-600 border-opacity-80  "
                    />
                    <p
                      onClick={() =>
                        cartDispatch({
                          type: "REMOVE_FROM_CART",
                          value: item,
                        })
                      }
                      className="p-2 opacity-50"
                    >
                      REMOVE
                    </p>
                  </div>
                </div>
              </div>

              <hr className="mb-10" />
            </>
          )) : <p>No Items</p>}
        </div>
      </div>
      {cartState.length >= 1  &&
        <div className="flex flex-col space-x-2 h-full bg-white border-[0.5px] overflow-hidden w-62 p-10 space-y-10 ">
        <div className="flex flex-row  justify-between space-x-10 font-semibold">
          <p className="text-xl">Total</p>
          <p className="text-xl">{ConvertNumberFormat(getSubTotal)}</p>
        </div>
        <Button title="Proceed to Checkout" />
      </div>
      }
    </div>
  );
}

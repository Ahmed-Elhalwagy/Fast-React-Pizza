import React from "react";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { decreaseQuantity, increaseQuatity } from "./cartSlice";

function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();

  function handelInc() {
    dispatch(increaseQuatity(pizzaId));
  }
  function handelDec() {
    dispatch(decreaseQuantity(pizzaId));
  }
  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button type="round" onClick={handelInc}>
        +
      </Button>
      <span className="text-sm font-medium">{currentQuantity}</span>
      <Button type="round" onClick={handelDec}>
        -
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;

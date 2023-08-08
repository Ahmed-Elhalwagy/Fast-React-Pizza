import React from "react";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { deleteItem } from "./cartSlice";

function DeleteItemButton({ pizzaId }) {
  const dispatch = useDispatch();

  function handelDeleteItem() {
    dispatch(deleteItem(pizzaId));
  }
  return (
    <Button type="small" onClick={handelDeleteItem}>
      Delete
    </Button>
  );
}

export default DeleteItemButton;

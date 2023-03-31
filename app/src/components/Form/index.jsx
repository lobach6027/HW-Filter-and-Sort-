import React from "react";
import s from "./style.module.css";
import { useDispatch } from "react-redux";
import { addAction } from "../../store/reducer/productsReducer";
export default function Form() {
  const dispatch = useDispatch();
  const submit = (e) => { 
    e.preventDefault();
    const { title, price, discount } = e.target;
    const newProduct = {
      id: Date.now(),
      title: title.value,
      price: price.value,
      discount: discount.value,
    };
    dispatch(addAction(newProduct));
    title.value = "";
    price.value = "";
    discount.value = "";
  };
  return (
    <div className={s.wrapper}>
      <form onSubmit={(e)=>submit(e)}>
        <input type="text" name="title" placeholder="Title" />
        <input type="number" name="price" placeholder="Price" />
        <input type="number" name="discount" placeholder="Discount" />
        <input className={s.addConfirm} type="submit" value="Add product" />
      </form>
    </div>
  );
}

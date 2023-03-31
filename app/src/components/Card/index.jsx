import React from "react";
import s from "./style.module.css";
export default function Card({ title, price, discount }) {
  console.log(discount==0)
  return (
    <div className={s.card}>
      <p className={s.title}>{title}</p>
      {(discount==0)?(<div className={s.full_price}>
        <span className={s.price_title}>Price:</span>
        <p>
          <span className={s.newPrice}> {price} $</span>
        </p>
      </div>):(<div className={s.price_container}>
        <span className={s.price_title}>Old price:</span>
        <p>
          <span className={s.price}> {price} $</span>
        </p>
        <span className={s.price_title}>New price:</span>
        <p className={s.newPrice}>
          {price - Math.round((price * discount) / 100)} $
        </p>
      </div>)}
    </div>
  );
}

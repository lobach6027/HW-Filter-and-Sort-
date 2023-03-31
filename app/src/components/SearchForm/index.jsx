import React, { useState } from "react";
import s from "./style.module.css";
import { useSelector } from "react-redux";
import Card from "../Card";

export default function SearchForm() {
  const products = useSelector((state) => state.products);
  const [product, setProduct] = useState();
  const [sortArray, setSortArray] = useState([]);
  console.log(product);
  console.log(products);
  const submit = (e) => {
    e.preventDefault();
    const { product } = e.target;
    const searchContainer = products.filter((item) => {
      if (item.title.includes(product.value)) {
        return item.title;
      }
    });
    setProduct(
      searchContainer.sort(function (a, b) {
        const titleOne = a.title.toLowerCase();
        const titleTwo = b.title.toLowerCase();
        if (titleOne < titleTwo) return -1;
        if (titleOne > titleTwo) return 1;
        return 0;
      })
    );
    product.value = "";
  };

  const sortByName = () => {
    const sorted = products.sort((a, b) => {
      const titleOne = a.title.toLowerCase();
      const titleTwo = b.title.toLowerCase();
      if (titleOne < titleTwo) return -1;
      if (titleOne > titleTwo) return 1;
      return 0;
    });
    setSortArray(sorted);
  };

  return (
    <div>
      <div className={s.serch_form}>
        <form onSubmit={(e) => submit(e)} className={s.search}>
          <input
            className={s.search_product}
            type="text"
            name="product"
            placeholder="Enter title..."
          />
          <input className={s.serch_button} type="submit" value="Search" />
        </form>
        <div className={s.sort}>
          <div className={s.sort_container}>
            <p>Sort by: </p>
            <button onClick={sortByName}> Name </button>
          </div>
          <button onClick={() => setProduct(products)}>Reset filter</button>
        </div>
      </div>
      {product === undefined ? (
        <div className={s.wrapper}>
          {products.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>
      ) : (
        <div className={s.wrapper}>
          {product.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>
      )}
    </div>
  );
}

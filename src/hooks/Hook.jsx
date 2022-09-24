import React, { useContext } from "react";
import { useFetch } from "./usefetch";
import Good from "./Good";
import { AppContext } from "../App";

const url = "https://jsonplaceholder.typicode.com/posts";
// "https://jsonplaceholder.typicode.com/posts"
// https://course-api.com/javascript-store-products

function Hook() {
  const { isTrue, product } = useFetch(url);
  const { load } = useContext(AppContext);
  function time() {
    let start = new Date().getSeconds();
    console.log(start);
  }
  time();

  return (
    <>
      <div>
        <p>{isTrue ? "Loading...." : "Data"}</p>
        {load &&
          product.map((good) => {
            return <Good key={good.id} {...good} />;
          })}
      </div>
    </>
  );
}

export default Hook;

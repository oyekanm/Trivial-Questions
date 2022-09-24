import React, { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [isTrue, setIsTrue] = useState(true);
  const [product, setProduct] = useState([]);

  const getProducts = async () => {
    const response = await fetch(url);
    const products = await response.json();
    setProduct(products);
    setIsTrue(false);
  };

  useEffect(() => {
    setTimeout(() => {
      getProducts();
    }, 3000);
  }, [url]);

  return { isTrue, product };
};

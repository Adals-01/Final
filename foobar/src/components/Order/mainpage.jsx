import Beerlist from "./beerlist";
import Basket from "./basket";
import React, { useEffect, useState } from "react";

export default function Mainpage(props) {
    const [products, setProducts] = useState([]);
    const [basket, setBasket] = useState([]);

function addToBasket(product) {
    setBasket(function (oldBasket) {
      const nextState = oldBasket.concat(product);
      return nextState;
    });
  }

    return (
      <main>
        <Beerlist  addToBasket={addToBasket} products={products} data={props.data}/>
        <Basket MyBasket={basket} />
      </main>
    );
  }
  
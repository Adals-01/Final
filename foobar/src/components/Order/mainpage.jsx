import Beerlist from "./beerlist";
import React, { useState } from "react";
import Checkout from "./checkout";
import getImageByKey from "./getImageByKey";
import logo from "../../assets/foobar-logo.svg";

export default function Mainpage(props) {
  const [basketPlacement, setbasketPlacement] = useState(false);
  const [moveBasket, setmoveBasket] = useState("translateY(100vh)");
  const [products, setProducts] = useState([]);
  const [basket, setBasket] = useState([]);

  function toggleBasket() {
    setbasketPlacement((basketPlacement) => !basketPlacement);
    if (basketPlacement === true) {
      setmoveBasket("translateY(100vh)");
      console.log(basketPlacement);
      console.log(moveBasket);
    }
    if (basketPlacement === false) {
      setmoveBasket("translateY(0vh)");
      console.log(basketPlacement);
      console.log(moveBasket);
    }
  }

  function goToList() {
    if (basketPlacement === true) {
      toggleBasket();
  }}


  function addToBasket(product) {
    setBasket(function (oldBasket) {
      const nextState = oldBasket.concat(product);
      return nextState;
    });
  }

  function removeFromBasket(product) {
    setBasket(function (oldBasket) {
      const index = [...oldBasket.filter((product) => product !== product)];
      const newData = [...oldBasket.slice(0, index), ...oldBasket.slice(index + 1)];
      return newData;
    });
  }

  function countTypeInBasket(product) {
    const findDuplicates = basket.map((item) => item.name === product);
    const counts = findDuplicates.filter(Boolean).length;
    return counts;
  }

  function Navbar() {
    return (
      <div className="navbar-container">
        <nav className="navbar">
          <img onClick={goToList} className="list-icon icon" src={getImageByKey("listicon")} alt={"list icon"} />
          <img className="home-icon icon" src={getImageByKey("homeicon")} alt={"home icon"} />
          <img onClick={toggleBasket} className="cart-icon icon" src={getImageByKey("carticon")} alt={"cart icon"} />
        </nav>
      </div>
    );
  }

  return (
    <main>
      <Navbar />
      <div className="foobar-beerlist-logo"><img  src={logo} alt={"foobar-logo"} /></div>
      <div className="main-orderform">
        <h1>Thirsty? Have a look at our selection.</h1>
        <Beerlist countTypeInBasket={countTypeInBasket} addToBasket={addToBasket} removeFromBasket={removeFromBasket} products={products} data={props.data} />
        <div className="checkout" style = {{transform:moveBasket}}>
          <Checkout countTypeInBasket={countTypeInBasket} addToBasket={addToBasket} removeFromBasket={removeFromBasket} products={products} MyBasket={basket} />
        </div>
      </div>
    </main>
  );
}

import React, { useState } from "react";
// import { Link } from "react-router-dom";
import elhefe from "../../assets/elhefe.png";
import fairytaleale from "../../assets/fairytaleale.png";
import githop from "../../assets/githop.png";
import hollabacklager from "../../assets/hollaback.png";
import hoppilyeverafter from "../../assets/hoppilyeverafter.png";
import mowintime from "../../assets/mowintime.png";
import row26 from "../../assets/row26.png";
import ruinedchildhood from "../../assets/ruinedchildhood.png";
import sleighride from "../../assets/sleighride.png";
import steampunk from "../../assets/steampunk.png";

const images = {
  elhefe,
  fairytaleale,
  githop,
  hollabacklager,
  hoppilyeverafter,
  mowintime,
  row26,
  ruinedchildhood,
  sleighride,
  steampunk,
};

function getImageByKey(key) {
  return images[key];
}
function addToBasket(product) {
  setBasket(function (oldBasket) {
    const nextState = oldBasket.concat(product);
    return nextState;
  });
}

export default function Beerlistitem(props) {
  function Price() {
    const beer = props.name;
    let price;
    if (beer === "El Hefe" || beer === "Hollaback Lager" || beer === "Hoppily Ever After" || beer === "Mowintime" || beer === "Row 26" || beer === "Steampunk") {
      let price = 65;
      return <p>{price}</p>;
    } else if (beer === "Fairy Tale Ale" || beer === "GitHop" || beer === "Ruined Childhood" || beer === "Sleighride") {
      let price = 75;
      console.log(price);
      return <p>{price}</p>;
    }
  }
  const beer = props.name;
  const alc = props.alc;

  let beerimg = beer.replace(/\s+/g, "").toLowerCase();

  // let price = alc.toString().split(".").join("");

  const initialCount = 0;
  const [count, setCount] = useState(initialCount);
  const [basket, setBasket] = useState([]);

  //BEER ITEM PAGE INFO
  // var WordPOS = require("wordpos"),
  // wordpos = new WordPOS();
  // const [BeerInfo, showBeerInfo] = React.useState(false);
  // const beerInfo = () => showBeerInfo(true);
  // console.log(props);
  // const getAdjectives = wordpos.getAdjectives("The angry bear chased the frightened little squirrel.", function (result) {
  //   console.log(result);
  // });
  // getAdjectives;
  // const Results = () => (
  //   <div id="results" className="beerItem">
  //     <img className="beerLabel" src={getImageByKey(beerimg)} alt={beerimg} />
  //     <div className="beerPoints">
  //       <div class="point">
  //         <p>CATEGORY</p>
  //         <h3>{props.category}</h3>
  //       </div>
  //       <div class="point">
  //         <p>ALCOHOL</p>
  //         <h3>{props.alc}</h3>
  //       </div>
  //       <div class="point">
  //         <p>PRICE</p>
  //         <h3>{price}</h3>
  //       </div>
  //     </div>
  //     <h2>OVERALL IMPRESSION</h2>
  //     <p>{props.overallImpression}</p>
  //     <div>
  //       <div>
  //         <h3>FLAVOR</h3>
  //         <h3>AROMA</h3>
  //         <h3>MOUTHFEEL</h3>
  //       </div>
  //       <div>
  //         <h3 className="adjective"></h3>
  //         <h3 className="adjective"></h3>
  //         <h3 className="adjective"></h3>
  //       </div>
  //     </div>
  //   </div>
  // );

  return (
    <div className="beerListItem">
      <div className="leftSide">
        <img className="beerLabel" src={getImageByKey(beerimg)} alt={beerimg} />
      </div>
      <div className="rightSide">
        <h3>{props.name}</h3>
        <p>{props.description.overallImpression}</p>

        <div>
          <p>{props.alc}% alc</p>
          <Price />
          {/* {(() => {
            if (price.length === 1) {
              return <p>{price}0 DKK</p>;
            } else {
              return <p>{price} DKK</p>;
            }
          })()} */}
          {/* <p onClick={beerInfo}>
            More info{BeerInfo ? <Results /> : null}
          </p> */}
        </div>
        <div className="addContainer">
          <button
            className="circleButton"
            onClick={(e) => {
              if (count > 0) {
                setCount((prevCount) => prevCount - 1);
              }
            }}
          >
            -
          </button>
          <p>{count}</p>

          <button
            className="circleButton"
            onClick={(e) => {
              setCount((prevCount) => prevCount + 1);
              props.addToBasket({
                price: props.price,
              });
            }}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

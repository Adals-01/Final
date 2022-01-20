const wordpos = new WordPOS({
  dictPath: "https://cdn.jsdelivr.net/npm/wordpos-web@1.0.2/dict"
})
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
  const beer = props.name;
  const alc = props.alc;
  let beerimg = beer.replace(/\s+/g, "").toLowerCase();
  let price = alc.toString().split(".").join("");

  const initialCount = 0;
  const [count, setCount] = useState(initialCount);
  const [basket, setBasket] = useState([]);


/* 
  wordpos.getAdjectives(`${props.description.aroma}`, function(result){
    tweetAdjectives = result;
  }) */


  //BEER ITEM PAGE INFO
  const [BeerInfo, showBeerInfo] = React.useState(false);
  const beerInfo = () => showBeerInfo(true);

  /* let a = wordpos.getAdjectives(`${props.description.aroma}`)
  .then((successMsg) => {
    console.log("Success:" + successMsg);
})
.catch((errorMsg) => { 
    console.log("Error:" + errorMsg);
})  */
const [aromadata, setAromas] = useState([]);

function Aroma() {
  const aromaItems = wordpos.getAdjectives(`${props.description.aroma}`)
/*   .then((response) => response.json()) */
  .then((adjective) => {
/*     console.log(adjective); */
    return adjective;
  });

  const printAddress = async () => {
    const a = await aromaItems;
    console.log(a);
    const aromaArr = a.map((aroma, index) => <div>{aroma}</div>)
    /* setAromas(aromaAr) */
    console.log(aromaArr);
  };
 
  return <div>{ printAddress()}</div>
 /*  aromaItems.then((a) => {
    console.log(a);
    return <div>{a}</div>;   */
  
 
 }
/*  console.log(aromaItems); 
  
 return <div>{printAddress()}</div>
} */
/* console.log(a)
return  <div>{printAddress()}</div>
 */

/* return <div>{a}</div> */
  /* .then(console.log) 
  .then((beerdata) => {
  setBeers(beerdata) 
   .then(function(result) {
  return <div>{result}</div>  */

/* 
   const aromaResult = wordpos.getAdjectives(`${props.description.aroma}`)
  
   console.log(aromaResult); */
 /*   const aromaArr =  aromaResult.map((aroma) => aroma );  */

  /* return <div>{aromaResult}</div> */ 

   


/* function doSomethingElse() {
  
} */


  const Results = () => (
    <div id="results" className="beerItem">
      <img className="beerLabel" src={getImageByKey(beerimg)} alt={beerimg} />
      <div className="beerPoints">
        <div className="point">
          <p>CATEGORY</p>
          <h3>{props.category}</h3>
        </div>
        <div className="point">
          <p>ALCOHOL</p>
          <h3>{props.alc}</h3>
        </div>
        <div className="point">
          <p>PRICE</p>
          <h3>{price}</h3>
          
        </div>
      </div>
      <h2>OVERALL IMPRESSION</h2>
      <p>{props.overallImpression}</p>
      <div>
        <div>
          <h3>FLAVOR</h3>
          <h3>AROMA</h3>
          <Aroma/>
          <h3>MOUTHFEEL</h3>
        </div>
        <div>
          <h3 className="adjective"></h3>
          <h3 className="adjective"></h3>
          <h3 className="adjective"></h3>
        </div>
      </div>
    </div>
  );

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
          {(() => {
            if (price.length === 1) {
              return <p>{price}0 DKK</p>;
            } else {
              return <p>{price} DKK</p>;
            }
          })()}
          <div onClick={beerInfo}>More info{BeerInfo ? <Results /> : null}</div>
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

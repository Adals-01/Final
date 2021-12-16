import React, { useState } from "react";
import getImageByKey from "./getImageByKey";
import PlusMinus from "./plusminus";

export default function Beerlistitem(props) {
  const beer = props.name;
  let beerimg = beer.replace(/\s+/g, "").toLowerCase();

  const alc = props.alc;
  let price = alc.toString().split(".").join("");

  const initialCount = 0;
  const [count, setCount] = useState(initialCount);
  const [basket, setBasket] = useState([]);

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
        <p>{props.alc}% alc</p>
        <p>{props.description.overallImpression}</p>

        <div>
          {(() => {
            if (price.length === 1) {
              return <p>{price}0 DKK</p>;
            } else {
              return <p>{price} DKK</p>;
            }
          })()}
          {/* <p onClick={beerInfo}>
            More info{BeerInfo ? <Results /> : null}
          </p> 
        </div>*/}

          <PlusMinus {...props} />
        </div>
      </div>
    </div>
  );
}

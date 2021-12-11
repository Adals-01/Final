
import getImageByKey from "./getImageByKey";

export default function BasketItem(props) {
    let beerimg = props.name.replace(/\s+/g, "").toLowerCase();
   /*  let price = alc.toString().split(".").join(""); */
  
return  (
    <section>
        <img src={getImageByKey(beerimg)} alt={beerimg} />
        <img className="beerLabel" src={getImageByKey(beerimg)} alt={beerimg} />
    <p>{props.name}</p>
    <p>{props.price}</p>
    <p>{props.count}</p>
    </section>
    )
 }

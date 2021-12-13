
import getImageByKey from "./getImageByKey";
import PlusMinus from "./plusminus";

export default function Beerlistitem(props) {
  const beer = props.name;
  
/* 
  let beerimg = beer.replace(/\s+/g, "").toLowerCase();
  let price = alc.toString().split(".").join("");

  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  function plus() {
    setCount((prevCount) => prevCount + 1);
   props.addToBasket({
      count: count + 1,
      price: props.alc,
      name: props.name,
    }); 
  }
  function minus() {
    if (count > 0) setCount((prevCount) => prevCount - 1);
  }  
 */
  let beerimg = beer.replace(/\s+/g, "").toLowerCase();
  return (
    <div className="beerListItem">
      <div className="leftSide">
        <img className="beerLabel" src={getImageByKey(beerimg)} alt={beerimg} />
      </div>
      <div className="rightSide">
        <h3>{props.name}</h3>
        <p>{props.alc}% alc</p>
        <p>{props.description.overallImpression}</p>
      <PlusMinus {...props}/>
      </div>
    </div>
  );
}

import BasketItem from "./basketItem";
import Checkout from "./checkout";


export default function Basket(props) {
    const initialValue = 0;
    let sum = props.MyBasket.reduce(function (previousValue, currentValue) {
      return previousValue + currentValue.price;
    }, initialValue);
  
   
/*     function CountPlusMinus() {
        if (initialCount === 0) {
          return count;
        }
        else {
          return props.countItems;
        }
      } */
    

    
    
    //remove duplicate objects items in MyBasket 
    let noDublicates = [...new Map(props.MyBasket.map(v => [v.name, v])).values()]
    

  /*    
    const counts = {};
props.MyBasket.forEach((prop) => {
   counts[prop] = (counts[prop] || 0) + 1;
   console.log(counts[prop]);
});
 */

      


/* const eachItem = props.MyBasket.filter(item => item.name === item.name);
  const counts = eachItem.length;
  console.log(counts);
 */
    const basketItemsArr = noDublicates.map((MyBasket, index) => <BasketItem countTypeInBasket={props.countTypeInBasket} {...MyBasket} addToBasket={props.addToBasket}  removeFromBasket={props.removeFromBasket} key={index}/>);  
 console.log(props.MyBasket);
    return ( 
      <div className="basket-wrapper">
         <div className="progressPlacement">
                <div className="progress-container">
                    <div className="circle-container"><div className="circle active">1</div></div>
                    <div className="circle-container"><div className="circle active">2</div></div>
                    <div className="circle-container"><div className="circle active">3</div></div>
                </div>
            </div>
        <div>
        <Checkout MyBasket={props.MyBasket}/>
          <h2>Here is what you have chosen:</h2>
          {basketItemsArr}
          <p>{props.MyBasket.length} items</p>
         {/*  <p>{sum} DKK</p> */}
        </div>
        <div className="bottom-cart">
       <p className="total">Total:</p>
        <div><p>{props.MyBasket.length*sum} DKK</p></div>
        </div>
        <div className="button-wrapper"><button className="primary">NEXT</button></div>
        </div>
    );
  }
  
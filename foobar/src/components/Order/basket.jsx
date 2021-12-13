import BasketItem from "./basketItem";


export default function Basket(props) {
    const initialValue = 0;
    let sum = props.MyBasket.reduce(function (previousValue, currentValue) {
      return previousValue + currentValue.price;
    }, initialValue);
  
    function Button(props) {
      if (props.sum <= 0) {
        return <button disabled={true}>Nothing</button>;
      }
      return <button>Click, you know you want to</button>;
    }

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
      <aside>
        <div>
          <h2>Your basket</h2>
          {basketItemsArr}
          <p>{props.MyBasket.length} items</p>
         {/*  <p>{sum} DKK</p> */}
        </div>
        <h3>Checkout</h3>
        <form></form>
        <Button />
      </aside>
    );
  }
  
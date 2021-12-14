export default function Introduction(props) {
  const initialValue = 0;
  console.log(props);
  /* let sum = props.MyBasket.reduce(function (previousValue, currentValue) {
      return previousValue + currentValue.price;
    }, initialValue);
    const noDublicates = [...new Map(props.MyBasket.map((v) => [v.name, v])).values()];
    let basketItemsArr = noDublicates.map((MyBasket, index) => <BasketItem countTypeInBasket={props.countTypeInBasket} {...MyBasket} addToBasket={props.addToBasket} removeFromBasket={props.removeFromBasket} key={index} />);
      console.log(basketItemsArr)  */
  return (
    <div className="basket-wrapper">
      {/*   <div>
         <h2>Here is what you have chosen:</h2>
          <div>{basketItemsArr}</div>
          <p> {props.MyBasket.length}  items</p>
        </div> */}
      <div className="bottom-cart">
        <p className="total">Total:</p>
        <div>{/*  <p>{props.MyBasket.length * sum} DKK</p> */}</div>
      </div>
    </div>
  );
}

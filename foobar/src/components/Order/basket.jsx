export default function Basket(props) {
    const initialValue = 0;
    let sum = props.MyBasket.reduce(function (previousValue, currentValue) {
      return previousValue + currentValue.price;
    }, initialValue);
  
    function Button(props) {
      if (props.sum <= 0) {
        return <button disabled={true}>Please wait</button>;
      }
      return <button>Click, you know you want to</button>;
    }
  
    return ( 
      <aside>
        <div>
          <h2>Your basket</h2>
          <p>{props.MyBasket.length} items</p>
          <p>${sum}</p>
        </div>
        <h3>Checkout</h3>
        <form></form>
        <Button />
      </aside>
    );
  }
  
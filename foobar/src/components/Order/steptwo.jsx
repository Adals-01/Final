import BasketItem from "./basketItem";
import { post } from "./post";
import { useRef } from "react";

export default function StepTwo(props) {

    /* POST form*/
console.log(props);
 const form = useRef(); 
const data = props.MyBasket.map((beer) => {
  return {
    name: beer.name,
    amount: 1,
  };

});

function handleSubmit(e) {
  e.preventDefault();
  //console.log(form.current.checkValidity());
  if (form.current.checkValidity()) {
    console.log("test");
    post(data);
  } else {
    form.current.reportValidity();
  }
}
  return (
    
    <div className="form-container">
        <form action="" ref={form} onSubmit={handleSubmit}>
        <h2>Now you pay</h2>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <span className="hint-mail" id="hint-mail">
            We will send you the reciept.
          </span>
          <input id="email" name="xyz" type="email" placeholder="&nbsp;" aria-describedby="hint-mail" autoComplete="xyz" required />
          <span className="error" id="err-mail" aria-live="assertive">
            You email adress must contain en '@'
          </span>
        </div>

        {/*FIRSTNAME and LASTNAME*/}
        <div className="form-group firstname-lastname">
          <div className="first-name">
            <label htmlFor="username">First name</label>
            <input id="username" name="xyz" type="text" placeholder="&nbsp;" aria-describedby="hint-user" autoComplete="xyz" required />
          </div>
          <div className="last-name">
            <label htmlFor="username">Last name</label>
            <input id="username" name="xyz" type="text" placeholder="&nbsp;" autoComplete="xyz" required />
          </div>
        </div>

        {/*CARD NR*/}
        <div className="field-container card-info">
          <label htmlFor="cardnumber">Card Number</label>
          <div>
            <input id="cardnumber" type="text" pattern="[0-9]*" inputMode="numeric"></input>

            {/* mm/yy */}
            <input id="expirationdate" placeholder="MM/YY" type="text" pattern="[0-9]*" inputMode="numeric" />
            {/* CVC */}
            <input placeholder="CVC" id="securitycode" type="text" pattern="[0-9]*" inputMode="numeric" />
          </div>
        </div>
        <button className="next">NEXT</button>
      </form>
    </div>
  );
}

// import BasketItem from "./basketItem";
import { post } from "./post";
import { useRef, useState } from "react";
import { push } from "./postemail";

export default function StepTwo(props) {
  const [emailReg, setPush] = useState("");

  /* POST form*/
  const form = useRef();
  const data = props.MyBasket.map((beer) => {
    return {
      name: beer.name,
      amount: 1,
    };
  });

  function handleSubmit(e) {
    e.preventDefault();

    if (form.current.checkValidity()) {
      console.log("test");
      post(data);
      push(emailReg);
    } else {
      form.current.reportValidity();
    }
  }
  function logEmail(e) {
    setPush(e.target.value);
    console.log(emailReg);
  }

  return (
    <div className="form-container">
      <form id="my-form" ref={form} onSubmit={handleSubmit}>
        <h2>Your payment details:</h2>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <span className="hint-mail" id="hint-mail">
            We will send you the reciept.
          </span>
          <input id="email" name="xyz" onChange={logEmail} type="email" placeholder="&nbsp;" aria-describedby="hint-mail" autoComplete="xyz" required />
          <span className="error" id="err-mail" aria-live="assertive">
            Your email adress must contain an '@'
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
          <div className="card-info-sub">
            <input id="cardnumber" /* placeholder="XXXX XXXX XXXX XXXX"  */ /* pattern="\d{4} \d{4} \d{4} \d{4}" */ type="text" pattern="[0-9]*" inputMode="numeric"></input>
            <div className="exp-sec">
              {/* mm/yy */}
              <input id="expirationdate" placeholder="MM/YY" type="text" /* pattern="[0-9]*" */ /* inputMode="numeric"  */ />
              {/* CVC */}
              <input placeholder="CVC" id="securitycode" type="text" pattern="[0-9]*" inputMode="numeric" />
            </div>
          </div>
        </div>
        <div className="button-wrapper"></div>
      </form>
    </div>
  );
}

import React from 'react';
import { Link } from "react-router-dom";
import PayPalButton from "./PayPalButton";

export default function CardTotals({value, history}) {
  const { cartSubTotal, cartTax, cartTotal, clearCart } = value;
  return(
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
          <Link to="/">
            <button
               className="btn btn-outline-danger text-uppercase mb-3 px-5" type="button"
            onClick={() => clearCart()}
            >
            Empty Bag
            </button>
          </Link>
            <div className="">
              <h5><span> Subtotal: &nbsp;
            </span>
              <strong>$ {cartSubTotal}</strong>
              </h5>
              <h5>
                <span> Tax: &nbsp;
                </span>
                <strong>$ {cartTax}</strong>
              </h5>
              <h5>
                  <span> Total: &nbsp;
                </span>
              <strong>$ {cartTotal}</strong>
              </h5>
            </div>
            <PayPalButton total={cartTotal} clearCart={clearCart} history={history} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}


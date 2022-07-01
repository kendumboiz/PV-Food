// import "../../pages/Checkout/Checkout.css";

import { Field } from "formik";
import React from "react";

export default function CheckoutBags({
  list,
  subtotalPrice,
  VATPrice,
  shipPrice,
  totalPrice,
}) {
  return (
    <div className="checkout_bag">
      <h2>Your Shopping Bag</h2>
      <ul className="checkout_item">
        {list &&
          list.length !== 0 &&
          list.map((item, key) => {
            return (
              <li key={key}>
                <img className="cart_img" src={item.imageUrl} alt="img" />
                <p className="cart_name">{item.name}</p>
                <p className="cart_price">{item.price}</p>
                <div className="quantity">
                  <span className="qty">Qty. {item.qty}</span>
                </div>
              </li>
            );
          })}
      </ul>
      <div className="checkout_price">
        <div className="row">
          <div className="col_2">Subtotal</div>
          <div className="col_1">VNĐ {subtotalPrice} </div>
        </div>
        <div className="row">
          <div className="col_2">VAT</div>
          <div className="col_1">VNĐ {VATPrice} </div>
        </div>
        <div className="row">
          <div className="col_2">Shipping</div>
          <div className="col_1">VNĐ {shipPrice} </div>
        </div>
      </div>
      <div className="checkout_code">
        <div className="code_text">Do you have a discount code?</div>
        <div className="code_input">
          <Field name="" type="text" placeholder=" " spellCheck="false" />
          <label>Enter your code</label>
        </div>
      </div>
      <div className="checkout_cost-totalPrice">
        <div className="row total">
          <div className="col_2">Total</div>
          <div className="col_1">VNĐ {totalPrice} </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./Payment.css";

function Payment(props) {
  const [deliverId, setDeliverId] = useState(-1);

  const shippingStorage = useSelector((state) => state.shipping);

  const { showCheckoutForm } = props;

  const activeDeliver = (id) => {
    setDeliverId(id);
  };

  const [checked, setChecked] = useState(false);

  return (
    <div className="payment_container">
      <div className="payment_contact">
        <h2>Contact and Shipping information</h2>
        <div className="contact">
          <div className="contact_content">
            <h4>Shipping address / Billing address</h4>
            <h3>
              {shippingStorage.firstName} {shippingStorage.lastName}{" "}
            </h3>
            <p>
              {" "}
              {shippingStorage.address}, {shippingStorage.district} District -{" "}
              Ward {shippingStorage.country} - {shippingStorage.city} city -{" "}
              {shippingStorage.mobile}{" "}
            </p>
          </div>
          <span onClick={showCheckoutForm}>Edit</span>
        </div>
      </div>
      <div className="payment_contact">
        <h2>Shipping method</h2>
        <div className="contact">
          <div className="contact_content">
            <h3>{shippingStorage.methodTitle} </h3>
            <p>
              {shippingStorage.methodContent} <br />{" "}
              {shippingStorage.methodNote}
            </p>
          </div>
          <span onClick={showCheckoutForm}>Edit</span>
        </div>
      </div>

      <div className="payment_contact">
        <div className="contact_content">
          <h2>Choose a payment method</h2>
        </div>
        <div className="payment_method">
          <label
            onClick={() => activeDeliver(4)}
            style={{
              background:
                deliverId === 4 ? "rgb(251, 241, 241)" : "rgb(245, 245, 245)",
              transition: "background 0.5s ease-in-out",
            }}
          >
            <div className="deliver_text">
              <h3>Bank</h3>
              <p>Pay by advance bank transfer</p>
            </div>
            <input
              type="checkbox"
              defaultChecked={checked}
              onChange={() => setChecked(!checked)}
            />
            <span class="checkmark"></span>
          </label>
          <label
            onClick={() => activeDeliver(5)}
            style={{
              background:
                deliverId === 5 ? "rgb(251, 241, 241)" : "rgb(245, 245, 245)",
              transition: "background 0.5s ease-in-out",
            }}
          >
            <div className="deliver_text">
              <h3>Credit Card, PostFinance</h3>
              <p>Payment by Visa or MasterCard credit card</p>
            </div>
            <input
              type="checkbox"
              defaultChecked={checked}
              onChange={() => setChecked(!checked)}
            />
            <span class="checkmark"></span>
          </label>
          <label
            onClick={() => activeDeliver(5)}
            style={{
              background:
                deliverId === 5 ? "rgb(251, 241, 241)" : "rgb(245, 245, 245)",
              transition: "background 0.5s ease-in-out",
            }}
          >
            <div className="deliver_text">
              <h3>Invoice</h3>
              <p>PAYMENT WITH INVOICE WITHIN 30 DAYS with our Partner</p>
            </div>
            <input
              type="checkbox"
              defaultChecked={checked}
              onChange={() => setChecked(!checked)}
            />
            <span class="checkmark"></span>
          </label>
        </div>
      </div>
      <div className="required">
        <b>* Required Field</b>
      </div>
      <div className="payment_btn">
        <button className="edit" onClick={showCheckoutForm}>
          Shipping method
        </button>
        <button className="payment">Go to payment</button>
      </div>
    </div>
  );
}

export default Payment;

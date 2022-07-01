import "../../pages/Checkout/Checkout.css";

import React, { useState } from "react";

import { Field } from "formik";

export default function DeliveryMethods() {
  const [deliveryId, setDeliveryId] = useState("");
  const [methodTitle, setmMethodTitle] = useState("");
  const [methodContent, setMethodContent] = useState("");
  const [methodNote, setMethodNote] = useState("");
  const [checked, setChecked] = useState(false);

  const activeDeliver = (id, title, content, note) => {
    setDeliveryId(id);
    setmMethodTitle(title);
    setMethodContent(content);
    setMethodNote(note);
  };
  return (
    <div className="delivery_content">
      <p>
        Orders placed before 11.30am are shipped the same day and delivered the
        next working day
      </p>

      <label
        onClick={() =>
          activeDeliver(
            0,
            "Giao Hàng Tiết Kiệm",
            "This carrier delivers in 1-2 working day",
            "(expected delivery in the next 24-48 hours because of Covid-19)"
          )
        }
        style={{
          background:
            deliveryId === 0 ? "rgb(251, 241, 241)" : "rgb(245, 245, 245)",
          transition: "background 0.5s ease-in-out",
        }}
      >
        <div className="deliver_text">
          <h3>Giao Hàng Tiết Kiệm</h3>
          <p>
            This carrier delivers in 1-2 working day <br /> (expected delivery
            in the next 24-48 hours because of Covid-19)
          </p>
        </div>
        <Field
          type="radio"
          name="deliveryName"
          defaultChecked={checked}
          value="Giao Hàng Tiết Kiệm"
          // onChange={() => setChecked(!checked)}
        />
        <span class="checkmark"></span>
      </label>

      <label
        onClick={() =>
          activeDeliver(
            1,
            "Ninja Van",
            "This carrier delivers in 2-3 working day",
            "(expected delivery in the next 48-72 hours because of Covid-19)"
          )
        }
        style={{
          background:
            deliveryId === 1 ? "rgb(251, 241, 241)" : "rgb(245, 245, 245)",
          transition: "background 0.5s ease-in-out",
        }}
      >
        <div className="deliver_text">
          <h3>Ninja Van</h3>
          <p>
            This carrier delivers in 2-3 working day <br /> (expected delivery
            in the next 48-72 hours because of Covid-19)
          </p>
        </div>
        <Field
          type="radio"
          name="deliveryName"
          defaultChecked={checked}
          value="Ninja Van"
          // onChange={() => setChecked(!checked)}
        />
        <span class="checkmark"></span>
      </label>

      <label
        onClick={() =>
          activeDeliver(
            2,
            "Shopee Express",
            "This carrier delivers in 3-4 working day",
            "(expected delivery in the next 48-96 hours because of Covid-19 )"
          )
        }
        style={{
          background:
            deliveryId === 2 ? "rgb(251, 241, 241)" : "rgb(245, 245, 245)",
          transition: "background 0.3s ease-in-out 0s",
        }}
      >
        <div className="deliver_text">
          <h3>Shopee Express</h3>
          <p>
            This carrier delivers in 3-4 working day <br /> (expected delivery
            in the next 48-96 hours because of Covid-19)
          </p>
        </div>
        <Field
          type="radio"
          name="deliveryName"
          defaultChecked={checked}
          value="Shopee Express"
          // onChange={() => setChecked(!checked)}
        />
        <span class="checkmark"></span>
      </label>
    </div>
  );
}

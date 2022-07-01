import "./Checkout.css";

import { Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { initialValues, validationSchema } from "formik/checkoutFormik";
import { useDispatch, useSelector } from "react-redux";

import CheckoutBags from "components/ShoppingBags";
import DeliveryMethods from "components/DeliveryMethods";
import Payment from "components/ReviewOrder";
import ShippingAddress from "components/ShippingAddress";
import { ShoppingBag } from "@mui/icons-material";
import { handleCheckout } from "utils/checkout";
import { useNavigate } from "react-router-dom";

// import { displayComponent } from "actions/Product";

function Checkout(props) {
  const cartStorage = useSelector((state) => state.cart);
  const { list } = cartStorage;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showPayment, setShowPayment] = useState(false);
  const [checkoutForm, setCheckoutForm] = useState(true);

  const showPaymentForm = () => {
    setShowPayment(true);
    setCheckoutForm(false);
  };

  const showCheckoutForm = () => {
    setShowPayment(false);
    setCheckoutForm(true);
  };

  // const openComponent = (name) => {
  //   dispatch(displayComponent({ component: name }));
  // };

  const subtotalPrice = list.reduce((a, item) => {
    return a + item.qty * item.price;
  }, 0);
  const shipPrice = subtotalPrice > 100000 ? 50000 : 20000;
  const VATPrice = subtotalPrice > 400000 ? 10000 : 20000;
  const totalPrice = subtotalPrice + shipPrice + VATPrice;

  return (
    <div className="checkout_container">
      <Formik
        initialValues={initialValues}
        // validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) =>
          handleCheckout(values, { setSubmitting })
        }
      >
        {(formikProps) => {
          const { isSubmitting, isValid } = formikProps;
          return (
            <Form className="checkout_content">
              <div
                className={checkoutForm ? "checkout_address" : "close_address"}
              >
                <h2>Shipping address</h2>
                <div className="address_content">
                  <div className="address_input">
                    <Field name="" type="text" />
                  </div>

                  <ShippingAddress />

                  <div className="checkout_delivery">
                    <h2>Delivery Method</h2>

                    <DeliveryMethods />

                    <div className="required">
                      <b>* Required Field</b>
                    </div>
                    <div className="checkout_btn">
                      <button
                        className="edit"
                        onClick={() => navigate(`/product/food`)}
                      >
                        Back to Shopping Bag
                      </button>
                      <button
                        type="submit"
                        className="payment"
                        onClick={showPaymentForm}
                      >
                        Go to payment
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={showPayment ? "payment_section" : "close_payment"}
              >
                <Payment showCheckoutForm={showCheckoutForm} />
              </div>

              <CheckoutBags
                list={list}
                subtotalPrice={subtotalPrice}
                VATPrice={VATPrice}
                shipPrice={shipPrice}
                totalPrice={totalPrice}
              />
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default Checkout;

import { displayComponent } from "actions/Product";
import { update } from "actions/shippingAction";
import Payment from "components/Payment";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./Checkout.css";

function Checkout(props) {
  const cartStorage = useSelector((state) => state.cart);
  const shippingStorage = useSelector((state) => state.shipping);
  const showComponent = useSelector((state) => state.product.showComponent);
  const { list } = cartStorage;

  const history = useHistory();
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState(shippingStorage.firstName);
  const [lastName, setLastName] = useState(shippingStorage.lastName);
  const [address, setAddress] = useState(shippingStorage.address);
  const [district, setDistrict] = useState(shippingStorage.district);
  const [country, setCountry] = useState(shippingStorage.country);
  const [city, setCity] = useState(shippingStorage.city);
  const [mobile, setMobile] = useState(shippingStorage.mobile);
  const [deliveryId, setDeliveryId] = useState(shippingStorage.deliveryId);

  //

  const [checked, setChecked] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [checkoutForm, setCheckoutForm] = useState(true);
  const [expandedPackage, setExpandedPackage] = useState(false);
  const [expandedShipping, setExpandedShipping] = useState(false);
  const [expandedCustomer, setExpandedCustomer] = useState(false);

  const [methodTitle, setmMethodTitle] = useState("");
  const [methodContent, setMethodContent] = useState("");
  const [methodNote, setMethodNote] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(" value is : ", firstName);
    dispatch(
      update({
        firstName,
        lastName,
        address,
        district,
        country,
        city,
        mobile,
        deliveryId,
        methodTitle,
        methodContent,
        methodNote,
      })
    );
  };

  const showPaymentForm = () => {
    setShowPayment(true);
    setCheckoutForm(false);
  };

  const showCheckoutForm = () => {
    setShowPayment(false);
    setCheckoutForm(true);
  };

  const activeDeliver = (id, title, content, note) => {
    setDeliveryId(id);
    setmMethodTitle(title);
    setMethodContent(content);
    setMethodNote(note);
  };

  const openComponent = (name) => {
    dispatch(displayComponent({ component: name }));
  };

  useEffect(() => {
    // console.log("show checkout : ", showComponent);
    // console.log(" sau khi submit : ", firstName);
    console.log("show component : ", showComponent);
  }, [showComponent]);

  const subtotalPrice = list.reduce((a, item) => {
    return a + item.qty * item.price;
  }, 0);
  const shipPrice = subtotalPrice > 100000 ? 50000 : 20000;
  const VATPrice = subtotalPrice > 400000 ? 10000 : 20000;
  const totalPrice = subtotalPrice + shipPrice + VATPrice;

  return (
    <div
      className="checkout_container"
      // className={
      //   showComponent === "Checkout" ? "checkout_container" : "close_checkout"
      // }
    >
      <div className="checkout_content">
        <div className={checkoutForm ? "checkout_address" : "close_address"}>
          <h2>Shipping address</h2>
          <form onSubmit={handleSubmit} className="address_content">
            <div className="address_input">
              <input type="text" />
            </div>
            <ul className="address_info">
              <li className="address_info-content">
                <input
                  type="text"
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder=" "
                  spellCheck="false"
                />
                <label htmlFor="">Surname *</label>
              </li>
              <li className="address_info-content">
                <input
                  type="text"
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder=" "
                  spellCheck="false"
                />
                <label htmlFor="">name *</label>
              </li>
              <li className="address_info-content">
                <input type="email" placeholder=" " spellCheck="false" />
                <label htmlFor="">your email address *</label>
              </li>
              <li className="address_info-content">
                <p>
                  <b>Country * </b>We currently deliver to Ho Chi Minh City only{" "}
                </p>
              </li>
              <li className="address_info-content">
                <input
                  type="text"
                  onChange={(e) => setCountry(e.target.value)}
                  placeholder=" "
                  spellCheck="false"
                />
                <label htmlFor="">Ward *</label>
              </li>
              <li className="address_info-content">
                <input
                  type="text"
                  onChange={(e) => setDistrict(e.target.value)}
                  placeholder=" "
                  spellCheck="false"
                />
                <label htmlFor="">District *</label>
              </li>
              <li className="address_info-content">
                <input
                  type="text"
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder=" "
                  spellCheck="false"
                />
                <label htmlFor="">Address *</label>
              </li>
              <li className="address_info-content">
                <input type="text" placeholder=" " spellCheck="false" />
                <label htmlFor="">Floor, Company, Post-Box *</label>
              </li>
              <li className="address_info-content">
                <input
                  type="text"
                  onChange={(e) => setCity(e.target.value)}
                  placeholder=" "
                  spellCheck="false"
                />
                <label htmlFor="">city *</label>
              </li>
              <li className="address_info-content">
                <input type="text" placeholder=" " spellCheck="false" />
                <label htmlFor="">zip code *</label>
              </li>
              <li className="address_info-content">
                <p>
                  <b>Mob * </b>We will use it to contact you about the deliver
                  of your order, if necessary{" "}
                </p>
              </li>
              <li className="address_info-content">
                <input type="text" placeholder=" " spellCheck="false" />
                <label htmlFor="">+84 *</label>
              </li>
              <li className="address_info-content">
                <input
                  type="text"
                  onChange={(e) => setMobile(e.target.value)}
                  placeholder=" "
                  spellCheck="false"
                />
                <label htmlFor="">Mobile *</label>
              </li>
              <li className="address_info-content">
                <label className="required">* Required Field</label>
              </li>
            </ul>
            <div className="checkout_delivery">
              <h2>Delivery Method</h2>
              <div className="delivery_content">
                <p>
                  Orders placed before 11.30am are shipped the same day and
                  delivered the next working day
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
                      deliveryId === 0
                        ? "rgb(251, 241, 241)"
                        : "rgb(245, 245, 245)",
                    transition: "background 0.5s ease-in-out",
                  }}
                >
                  <div className="deliver_text">
                    <h3>Giao Hàng Tiết Kiệm</h3>
                    <p>
                      This carrier delivers in 1-2 working day <br /> (expected
                      delivery in the next 24-48 hours because of Covid-19)
                    </p>
                  </div>
                  <input
                    type="radio"
                    name="radio"
                    defaultChecked={checked}
                    onChange={() => setChecked(!checked)}
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
                      deliveryId === 1
                        ? "rgb(251, 241, 241)"
                        : "rgb(245, 245, 245)",
                    transition: "background 0.5s ease-in-out",
                  }}
                >
                  <div className="deliver_text">
                    <h3>Ninja Van</h3>
                    <p>
                      This carrier delivers in 2-3 working day <br /> (expected
                      delivery in the next 48-72 hours because of Covid-19)
                    </p>
                  </div>
                  <input
                    type="radio"
                    name="radio"
                    defaultChecked={checked}
                    onChange={() => setChecked(!checked)}
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
                      deliveryId === 2
                        ? "rgb(251, 241, 241)"
                        : "rgb(245, 245, 245)",
                    transition: "background 0.3s ease-in-out 0s",
                  }}
                >
                  <div className="deliver_text">
                    <h3>Shopee Express</h3>
                    <p>
                      This carrier delivers in 3-4 working day <br /> (expected
                      delivery in the next 48-96 hours because of Covid-19)
                    </p>
                  </div>
                  <input
                    type="radio"
                    name="radio"
                    defaultChecked={checked}
                    onChange={() => setChecked(!checked)}
                  />
                  <span class="checkmark"></span>
                </label>
              </div>
              <div className="required">
                <b>* Required Field</b>
              </div>
              <div className="checkout_btn">
                <button
                  className="edit"
                  onClick={() => history.push(`/product/food`)}
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
          </form>
        </div>
        <div className={showPayment ? "payment_section" : "close_payment"}>
          <Payment showCheckoutForm={showCheckoutForm} />
        </div>
        <div className="checkout_bag">
          <h2>Your Shopping Bag</h2>
          <ul className="checkout_item">
            {list.map((item, key) => {
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
              <input type="text" placeholder=" " spellCheck="false" />
              <label>Enter your code</label>
            </div>
          </div>
          <div className="checkout_cost-totalPrice">
            <div className="row total">
              <div className="col_2">Total</div>
              <div className="col_1">VNĐ {totalPrice} </div>
            </div>
          </div>

          <div className="checkout_help">
            <h2>Need help?</h2>
            <div className="help_content">
              <div
                className="help_content-title"
                onClick={() => setExpandedPackage(!expandedPackage)}
              >
                <p>Packaging</p>
                <span className="toggle">
                  {" "}
                  <i
                    class={
                      expandedPackage ? "fa fa-angle-down" : "fa fa-angle-up  "
                    }
                    aria-hidden="true"
                  ></i>
                </span>
              </div>

              <div
                className={
                  expandedPackage ? " content_text-open" : "help_content-text"
                }
              >
                <div
                  className={
                    expandedPackage
                      ? "content-text content-text-open"
                      : "content-text"
                  }
                >
                  <p>
                    To guarantee the best experience of receiving our product,
                    the package you will receive will not show anything on the
                    outside that could reveal its contents, in order to avoid
                    generating interest from third or malicious parties.
                  </p>
                </div>
              </div>
            </div>

            <div className="help_content">
              <div
                className="help_content-title"
                onClick={() => setExpandedShipping(!expandedShipping)}
              >
                <p>Shipping</p>
                <span className="toggle">
                  {" "}
                  <i
                    class={
                      expandedShipping ? "fa fa-angle-up" : "fa fa-angle-down"
                    }
                    aria-hidden="true"
                  ></i>
                </span>
              </div>
              <div
                className={
                  expandedShipping ? " content_text-open" : "help_content-text"
                }
              >
                <div
                  className={
                    expandedShipping
                      ? "content-text content-text-open"
                      : "content-text"
                  }
                >
                  <p>
                    To guarantee the best experience of receiving our product,
                    the package you will receive will not show anything on the
                    outside that could reveal its contents, in order to avoid
                    generating interest from third or malicious parties.
                  </p>
                </div>
              </div>
            </div>

            <div className="help_content">
              <div
                className="help_content-title"
                onClick={() => setExpandedCustomer(!expandedCustomer)}
              >
                <p>Customer care</p>
                <span className="toggle">
                  {" "}
                  <i
                    class={
                      expandedCustomer ? "fa fa-angle-up" : "fa fa-angle-down"
                    }
                    aria-hidden="true"
                  ></i>
                </span>
              </div>
              <div
                className={
                  expandedCustomer ? "content_text-open" : "help_content-text"
                }
              >
                <div
                  className={
                    expandedCustomer
                      ? "content-text content-text-open"
                      : "content-text"
                  }
                >
                  <p>
                    To guarantee the best experience of receiving our product,
                    the package you will receive will not show anything on the
                    outside that could reveal its contents, in order to avoid
                    generating interest from third or malicious parties.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;

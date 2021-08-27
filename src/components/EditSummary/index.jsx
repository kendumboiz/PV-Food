import { decreaseProduct, increaseProduct, removeProduct } from "actions/Cart";
import { showCheckout, showListItem } from "actions/Product";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Edit.css";

function EditCheckout(props) {
  const cartStorage = useSelector((state) => state.cart);

  const { list } = cartStorage;

  const dispatch = useDispatch();

  const [frame, setFrame] = useState(false);

  const openFrame = () => setFrame(true);

  const showComponent = useSelector((state) => state.product.showComponent);
  const show_List = useSelector((state) => state.product.showListItem);

  const openCheckout = () => dispatch(showCheckout());

  const subtotalPrice = list.reduce((a, item) => {
    console.log(" a c là ", a, item);
    return a + item.qty * item.price;
  }, 0);
  const shipPrice = subtotalPrice > 100000 ? 50000 : 20000;
  const VATPrice = subtotalPrice > 400000 ? 10000 : 20000;
  const totalPrice = subtotalPrice + shipPrice + VATPrice;

  useEffect(() => {
    console.log("list # : ", list);
    console.log("show Edit checkout : ", showComponent);
    console.log("show list item : ", show_List);
  }, [list, showComponent, show_List]);

  const onRemoveQty = (item) => dispatch(decreaseProduct({ item }));

  const onAddQty = (item) => dispatch(increaseProduct({ item }));

  const onDelete = (item) => {
    const existedItem = list.find(
      (x) => x.category === item.category && x.id === item.id
    );
    if (existedItem) dispatch(removeProduct({ item }));
  };
  return (
    <div
      className={
        showComponent === "Edit cart" ? "edit_container" : "close_edit"
      }
    >
      <div className="edit_item">
        <div className="edit_item-content">
          <h2>Your Items</h2>
          <div className="content_title">
            <div className="title item">
              <p>item</p>
            </div>
            <div className="title price">
              <p>Price</p>
            </div>
            <div className="title quantity">
              <p>Quantity</p>
            </div>
            <div className="title subtotal">
              <p>Subtotal</p>
            </div>
          </div>
        </div>
        <ul className="edit_cart">
          {list.map((item, key) => {
            return (
              <li key={key}>
                <img className="cart_img" src={item.imageUrl} alt="img" />
                <p className="cart_name">{item.name}</p>
                <p className="cart_price">{item.price}</p>
                <p className="cart_subtotal">VNĐ {subtotalPrice} </p>
                <span className="cart_delete" onClick={() => onDelete(item)}>
                  Delete
                </span>
                <div className="quantity">
                  <button
                    onClick={() => onRemoveQty(item)}
                    className="remove"
                    disabled={item.qty <= 1}
                  >
                    -
                  </button>
                  <span className="qty">{item.qty}</span>
                  <button onClick={() => onAddQty(item)} className="add">
                    +
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="edit_bag">
        <h2>Your Shopping Bag</h2>
        <div className="edit_bag-content">
          <div className="edit_cost">
            <div className="row">
              <div className="cost_subtotal col_2">Subtotal</div>
              <div className="cost_subtotal col_1">VNĐ {subtotalPrice} </div>
            </div>
            <div className="row">
              <div className="cost_subtotal col_2">VAT</div>
              <div className="cost_subtotal col_1">VNĐ {VATPrice} </div>
            </div>
            <div className="row">
              <div className="cost_subtotal col_2">Shipping</div>
              <div className="cost_subtotal col_1">VNĐ {shipPrice} </div>
            </div>
          </div>
          <div className="edit_code">
            <div className="code_text">Do you have a discount code?</div>
            <div className="code_input">
              <input type="text" placeholder=" " spellCheck="false" />
              <label>Enter your code</label>
            </div>
          </div>
          <div className="edit_cost-totalPrice">
            <div className="row total">
              <div className="col_2">Total</div>
              <div className="col_1">VNĐ {totalPrice} </div>
            </div>
          </div>
          <div className=" edit_checkout">
            <button onClick={openCheckout}>Checkout</button>
          </div>
        </div>
      </div>
      <div className="edit_method">
        <div className="payment method">
          <h2>Payment methods</h2>
          <p>
            You can pay your orders by Visa and Mastercard credit cards,
            Postfinance card, E-Finance and SwissBilling. All your personal and
            payment information is communicated to our financial partners using
            a very powerful encryption system, which ensures that no third party
            can get hold of such information. Furthermore, we do not store any
            sensitive information about the payment method you use on our
            systems.
          </p>
        </div>
        <div className="delivery method">
          <h2>Timing method of delivery</h2>
          <p>
            If you order by 11.30, your order will be prepared and shipped the
            same day, or the next business day in the event of orders received
            on public holidays. Delivery takes place with Swiss Post, usually
            the next working day following the shipment date, with the exception
            of some areas marked as remote from the postal service.
          </p>
        </div>
        <div className="package method">
          <h2>Anonymous Package</h2>
          <p>
            To guarantee the best experience of receiving our product, the
            package you will receive will not show anything on the outside that
            could reveal its contents, in order to avoid generating interest
            from third or malicious parties.
          </p>
        </div>
      </div>
    </div>
  );
}

export default EditCheckout;

import "./Cart.css";

import { decreaseQty, removeProduct, updateQty } from "features/cartSlice";
import { useDispatch, useSelector } from "react-redux";

import Images from "constants/images";
import { useNavigate } from "react-router-dom";

// import { displayComponent } from "actions/Product";


function Cart(props) {
  const { openCartFrame, setOpenCartFrame } = props;
  const cartStorage = useSelector((state) => state.cart.list);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const subtotalPrice = cartStorage.reduce((a, item) => {
    return a + item.qty * item.price;
  }, 0);
  const shipPrice = subtotalPrice > 100000 ? 50000 : 20000;
  const totalPrice = subtotalPrice + shipPrice;

  const openComponent = (name) => {
    setOpenCartFrame(false);
    // dispatch(displayComponent({ component: name }));
  };

  const onRemoveQty = (item) => dispatch(decreaseQty({ item }));

  const onAddQty = (item) => dispatch(updateQty({ item }));

  const onDelete = (item) => {
    const existedItem = cartStorage.find(
      (x) => x.category === item.category && x.id === item.id
    );
    if (existedItem) dispatch(removeProduct({ item }));
  };

  return (
    <div>
      <div
        className={openCartFrame ? "open-overlay" : "overlay"}
        onClick={() => setOpenCartFrame(false)}
      ></div>

      <div className={openCartFrame ? "open_cart" : "cart_container"}>
        {cartStorage.length === 0 && (
          <div className="empty_cart">
            <img src={Images.EMPTY_CART} alt="empty_cart" />
            <h2>Your Shopping Bag is empty.</h2>
          </div>
        )}

        {cartStorage.length !== 0 && (
          <ul className="cart_list">
            {cartStorage.map((item, key) => {
              return (
                <li key={key}>
                  <img
                    className="cart_img"
                    onClick={() => openComponent("List product")}
                    src={item.imageUrl}
                    alt="img"
                  />
                  <span className="cart_delete" onClick={() => onDelete(item)}>
                    Delete
                  </span>
                  <p className="cart_name">{item.name}</p>
                  <p className="cart_price">{item.price}</p>
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
        )}
        <div className="basket">
          <div className="basket_contain">
            <div className="basket_content">
              <div className="row">
                <div className="col_2">Subtotal</div>
                <div className="col_1 text_right">
                  VNĐ
                  {subtotalPrice}
                </div>
              </div>
              <div className="row">
                <div className="col_2">Shipping</div>
                <div className="col_1 text_right">
                  VNĐ
                  {shipPrice}
                </div>
              </div>
              <div className="row total">
                <div className="col_2">Total</div>
                <div className="col_1 text_right">
                  VNĐ
                  {totalPrice}
                </div>
              </div>
            </div>
            {cartStorage.length === 0 && (
              <div className="bastket_btn">
                <button onClick={() => openComponent("List product")}>
                  Continue shopping
                </button>
              </div>
            )}
            {cartStorage.length !== 0 && (
              <div className="bastket_btn">
                <button onClick={() => navigate("/checkout")} className="edit">
                  Edit
                </button>
                <button
                  onClick={() => navigate("/checkout")}
                  className="checkout"
                >
                  Checkout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;

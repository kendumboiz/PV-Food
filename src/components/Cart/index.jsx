import {
  decreaseProduct,
  increaseProduct,
  removeProduct,
} from "actions/CartAction";
import { getNumbers } from "actions/getActions";
import { displayComponent } from "actions/Product";
import Images from "constants/images";
import { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import "./Cart.css";

function Cart(props) {
  const cartStorage = useSelector((state) => state.cart);
  const showComponent = useSelector((state) => state.product.showComponent);
  const { list } = cartStorage;

  const dispatch = useDispatch();
  useEffect(() => {
    console.log("list # : ", list);
    console.log("show component : ", showComponent);
  }, [list, showComponent]);

  const subtotalPrice = list.reduce((a, item) => {
    // console.log(" a c là ", a, item);
    return a + item.qty * item.price;
  }, 0);
  const shipPrice = subtotalPrice > 100000 ? 50000 : 20000;
  const totalPrice = subtotalPrice + shipPrice;

  const [frame, setFrame] = useState(false);

  const openFrame = () => setFrame(true);

  const closeFrame = () => setFrame(false);

  const openComponent = (name) => {
    setFrame(false);
    dispatch(displayComponent({ component: name }));
  };

  const onRemoveQty = (item) => dispatch(decreaseProduct({ item }));

  const onAddQty = (item) => dispatch(increaseProduct({ item }));

  const onDelete = (item) => {
    const existedItem = list.find(
      (x) => x.category === item.category && x.id === item.id
    );
    if (existedItem) dispatch(removeProduct({ item }));
  };

  return (
    <div>
      <div className="cart_toggle">
        <i
          onClick={openFrame}
          class="fa fa-shopping-cart"
          aria-hidden="true"
        ></i>
        {/* <p>{props.basketProps.basketNumbers} </p> */}
      </div>
      {/* <p>{list && list[0] && list[0].qty ? list[0].qty : "0"} </p> */}

      <div
        className={frame ? "open-overlay" : "overlay"}
        onClick={closeFrame}
      ></div>

      <div className={frame ? "open_cart" : "cart_container"}>
        {list.length === 0 && (
          <div className="empty_cart">
            <img src={Images.EMPTY_CART} alt="empty_cart" />
            <h2>Your Shopping Bag is empty.</h2>
          </div>
        )}

        {list.length !== 0 && (
          <ul className="cart_list">
            {console.log("list Test : ", list)};
            {list.map((item, key) => {
              return (
                <li key={key}>
                  <img className="cart_img" src={item.imageUrl} alt="img" />
                  <p className="cart_name">{item.name}</p>
                  <p className="cart_price">{item.price}</p>
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
        )}
        <div className="basket">
          <div className="basket_contain">
            <div className="basket_content">
              <div className="row">
                <div className="col_2">Subtotal</div>
                <div className="col_1 text_right">VNĐ {subtotalPrice} </div>
              </div>
              <div className="row">
                <div className="col_2">Shipping</div>
                <div className="col_1 text_right">VNĐ {shipPrice} </div>
              </div>
              <div className="row total">
                <div className="col_2">Total</div>
                <div className="col_1 text_right">VNĐ {totalPrice} </div>
              </div>
            </div>
            {list.length === 0 && (
              <div className="bastket_btn">
                <button onClick={closeFrame}>Continue shopping</button>
              </div>
            )}
            {list.length !== 0 && (
              <div className="bastket_btn">
                <button
                  onClick={() => openComponent("Edit cart")}
                  className="edit"
                >
                  Edit
                </button>
                <button
                  onClick={() => openComponent("Checkout")}
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

const mapStateToProps = (state) => ({
  basketProps: state.basket,
});

export default connect(mapStateToProps, { getNumbers })(Cart);

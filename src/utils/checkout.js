import { postShippingInfo } from "features/checkoutSlice";
import { store } from "app/store";

export const handleCheckout = (values, { setSubmitting }) => {
  console.log(
    "🚀 ~ file: checkout.js ~ line 2 ~ handleCheckout ~ values",
    values
  );
  store.dispatch(postShippingInfo(values));
};

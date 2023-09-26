import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectMemoCartItemQuantity } from "../../../redux/user/userSelector";
import { addCartItem, deleteCartItem } from "../../../redux/user/userSlice";
import { toast } from "react-toastify";

const useCartHandler = (product) => {
  const dispatch = useDispatch();

  // Memoized version of cart Quantity
  const memoCartItem = useMemo(selectMemoCartItemQuantity, []);
  const quantity = useSelector((state) => memoCartItem(state, product?._id));

  // Add to cart handler
  const addToCartHandler = () => {
    if (quantity === product?.stock) return;
    const currQty = quantity + 1;

    dispatch(addCartItem({ product, quantity: currQty }));

    if (currQty === 1) {
      toast.success(`New item added in your cart.`);
    } else {
      toast.info(`Quantity increase in your existing cart item.`);
    }
  };

  // Remove from cart handler
  const removeFromCartHandler = () => {
    if (quantity === 0) return;
    const currQty = quantity > 1 ? quantity - 1 : 0;

    if (currQty === 0) {
      dispatch(deleteCartItem({ product }));
      toast.warn(`Item removed from your cart.`);
    } else {
      dispatch(addCartItem({ product, quantity: currQty }));
      toast.info(`Quantity decrease in your existing cart item.`);
    }
  };

  return { quantity, addToCartHandler, removeFromCartHandler };
};

export default useCartHandler;

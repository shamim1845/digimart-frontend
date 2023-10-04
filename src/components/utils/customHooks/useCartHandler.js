import { useEffect, useState } from "react";
import {
  useAddToCartMutation,
  useGetMyCartListQuery,
  useRemoveFromCartMutation,
} from "../../../redux/api/cart/cartAPI";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useRemoveToFavouriteListMutation } from "../../../redux/api/favourite/favouriteAPI";

const useCartHandler = (productId) => {
  const [quantity, setQuantity] = useState(0);

  const navigate = useNavigate();

  // get my cart list
  const { isSuccess, data } = useGetMyCartListQuery();
  // find item already exist or not in cart list, if exist set cart quantity
  useEffect(() => {
    if (isSuccess) {
      const item = data?.carts?.find(
        (item) => item?.product?._id === productId
      );
      if (item) {
        setQuantity(item?.quantity);
      } else {
        setQuantity(0);
      }
    }
  }, [isSuccess, data?.carts, productId]);

  // Mutation for add to cart
  const [addToCart] = useAddToCartMutation();
  // Mutation for remove to cart
  const [removeFromCart] = useRemoveFromCartMutation();
  // Remove  from favourite mutation
  const [removeFromFavouriteList] = useRemoveToFavouriteListMutation();

  // Add to cart handler
  const addToCartHandler = (qty) => {
    if (qty === 0) {
      removeFromCart({ productId })
        .unwrap()
        .then((res) => {
          toast.info(res?.message);
        })
        .catch((err) => {
          toast.error(err?.data?.message);
        });
    } else {
      addToCart({ productId, quantity: qty })
        .unwrap()
        .then((res) => {
          toast.success(res?.message);
        })
        .catch((err) => {
          toast.error(err?.data?.message);
          if (err?.status === 401) {
            setTimeout(() => {
              navigate("/login");
              window.scrollTo(0, 0);
            }, 2000);
          }
        });
    }
  };

  // Add to cart handler
  const addToCartFromFavouriteHandler = () => {
    addToCart({ productId, quantity: 1 })
      .unwrap()
      .then((res) => {
        toast.success(res?.message);
        removeFromFavouriteList({ productId });
      })
      .catch((err) => {
        toast.error(err.data?.message);
      });
  };

  // Remove from cart handler
  const removeFromCartHandler = () => {
    removeFromCart({ productId })
      .unwrap()
      .then((res) => {
        toast.info(res?.message);
      })
      .catch((err) => {
        toast.error(err?.data?.message);
      });
  };

  return {
    quantity,
    addToCartHandler,
    addToCartFromFavouriteHandler,
    removeFromCartHandler,
  };
};

export default useCartHandler;

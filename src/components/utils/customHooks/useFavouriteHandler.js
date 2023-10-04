import { useEffect, useState } from "react";
import {
  useAddToFavouriteListMutation,
  useGetMyFavouriteListQuery,
  useRemoveToFavouriteListMutation,
} from "../../../redux/api/favourite/favouriteAPI";
import { useRemoveFromCartMutation } from "../../../redux/api/cart/cartAPI";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const useFavouriteHandler = (productId) => {
  const [favourite, setFavourite] = useState(false);

  const navigate = useNavigate();

  // Add to favourite mutation
  const [addToFavouriteList] = useAddToFavouriteListMutation();
  // Remove  from favourite mutation
  const [removeToFavouriteList] = useRemoveToFavouriteListMutation();
  // Mutation for remove to cart
  const [removeFromCart] = useRemoveFromCartMutation();

  // Get my Favourite list
  const { isSuccess, data, isError } = useGetMyFavouriteListQuery();

  // Effect for find product exist or not in favourite list
  useEffect(() => {
    if (isSuccess) {
      const product = data?.favourites.find((item) => item?._id === productId);
      if (product) {
        setFavourite(true);
      } else {
        setFavourite(false);
      }
    }
    if (isError) {
      setFavourite(false);
    }
  }, [isSuccess, isError, data?.favourites, productId]);

  // Add item to favourite list
  const addfavouriteItemHandler = () => {
    !favourite &&
      addToFavouriteList({ productId })
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
  };

  // Add item to favourite list
  const addfavouriteItemFromCartHandler = () => {
    !favourite &&
      addToFavouriteList({ productId })
        .unwrap()
        .then((res) => {
          toast.success(res?.message);
          removeFromCart({ productId });
        })
        .catch((err) => {
          toast.error(err?.data?.message);
        });
  };

  // Remove item from favourite list
  const removefavouriteHandler = () => {
    favourite &&
      removeToFavouriteList({ productId })
        .unwrap()
        .then((res) => {
          toast.info(res?.message);
        })
        .catch((err) => {
          toast.error(err?.data?.message);
        });
  };

  return {
    favourite,
    addfavouriteItemHandler,
    addfavouriteItemFromCartHandler,
    removefavouriteHandler,
  };
};

export default useFavouriteHandler;

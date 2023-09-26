import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  addFavouriteItem,
  deleteFavouriteItem,
} from "../../../redux/user/userSlice";

const useFavouriteHandler = (product) => {
  const [favourite, setFavourite] = useState(false);

  const dispatch = useDispatch();

  //   Effect for checking item already exist or not in favourite list
  useEffect(() => {
    setFavourite(false);

    function localFavouriteItem() {
      const favItems = JSON.parse(localStorage.getItem("favourite-item"));
      favItems &&
        favItems.find((item) => {
          if (item.product._id === product._id) {
            setFavourite(true);
          }
          return null;
        });
    }
    localFavouriteItem();
  }, [product._id]);

  // Add item to favourite list
  const addfavouriteItemHandler = () => {
    setFavourite(true);
    dispatch(addFavouriteItem({ product }));
  };

  // Remove item from favourite list
  const removefavouriteHandler = () => {
    setFavourite(false);
    dispatch(deleteFavouriteItem({ product }));
  };

  return { favourite, addfavouriteItemHandler, removefavouriteHandler };
};

export default useFavouriteHandler;

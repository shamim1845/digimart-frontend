import { createSelector } from "reselect";

export const selectAuthenticated = (state) => state.user.authenticated;
export const selectUserInfo = (state) => state.user.userInfo;
export const selectCartItems = (state) => state.user.cartItems;
export const selectFavouriteItems = (state) => state.user.favouriteItems;
export const selectCurrency = (state) => state.user.currency;

// Memoized version of selector
export const selectMemoCartItemQuantity = () =>
  createSelector(
    selectCartItems,
    (state, productId) => productId,
    (cartItems, productId) => {
      const currentItem = cartItems?.find((item) => {
        return item.product?._id === productId;
      });

      if (currentItem) {
        return currentItem?.quantity;
      }

      return 0;
    }
  );

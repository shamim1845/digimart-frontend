import { useEffect, useState } from "react";
import { useGetMyCartListQuery } from "../../../redux/api/cart/cartAPI";
import { rate } from "../../../App";

const useCalculatePrice = () => {
  const [productPrice, setProductPrice] = useState(0);
  const [shippingCost, setShippingCost] = useState(0);
  const [tax, setTax] = useState(0);
  const [total, setTotal] = useState(0);

  // get my cart list
  const { data } = useGetMyCartListQuery();

  const orderdItems = data?.carts;

  //   calculate
  useEffect(() => {
    const calcProductPrice = orderdItems?.reduce((acc, item) => {
      return acc + item.product.price * item.quantity;
    }, 0);

    const calcShippingCost = Math.round(
      calcProductPrice * (rate.shipping / 100)
    );
    const calcTax = Math.round(calcProductPrice * (rate.tax / 100));

    setProductPrice(calcProductPrice);
    setShippingCost(calcShippingCost);
    setTax(calcTax);
    setTotal(calcProductPrice + calcShippingCost + calcTax);
  }, [orderdItems]);

  return { productPrice, shippingCost, tax, total };
};

export default useCalculatePrice;

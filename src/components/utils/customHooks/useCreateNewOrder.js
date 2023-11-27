import axios from "axios";
import { toast } from "react-toastify";
import {
  useGetMyCartListQuery,
  useRemoveAllFromCartMutation,
} from "../../../redux/api/cart/cartAPI";
import { useEffect, useState } from "react";
import useCalculatePrice from "./useCalculatePrice";
import { useNavigate } from "react-router-dom";

const useCreateNewOrder = ({ setIsLoading }) => {
  const [shippingInfo, setShippingInfo] = useState(null);

  const navigate = useNavigate();
  const [removeAllFromCart] = useRemoveAllFromCartMutation();

  // fetch shiping info as soon as page loads
  useEffect(() => {
    axios.get("/api/v1/shippinginfo").then((res) => {
      setShippingInfo(res?.data?.shippingInfo);
    });
  }, []);

  // get my cart list
  const { data } = useGetMyCartListQuery();
  const orderdItems = data?.carts;

  const { productPrice, shippingCost, tax, total } = useCalculatePrice();

  // Create an Order After complete the payment
  const createNewOrder = ({ paymentProvider, paymentId, paymentStatus }) => {
    let orderItems = [];
    orderdItems.map((item) => {
      orderItems.push({
        productId: item.product._id,
        name: item.product.name,
        price: item.product.price,
        quantity: item.quantity,
        image: item.product.images[0].url,
      });

      return null;
    });

    const newOrder = {
      shippingInfo,
      orderItems,
      paymentInfo: {
        id: paymentId,
        provider: paymentProvider,
        status: paymentStatus,
        currency: "USD",
        itemsPrice: productPrice,
        taxPrice: tax,
        shippingPrice: shippingCost,
        totalPrice: total,
      },
    };

    axios
      .post("/api/v1/order/new", newOrder)
      .then((res) => {
        if (res.status === 201) {
          toast.success(
            res.data?.message || "Your order has been Successfully created."
          );
          setTimeout(() => {
            navigate("/order/sucess");
            removeAllFromCart();
          }, 3000);
        }
      })
      .catch((err) => {
        toast.error(err?.message || "Your order have not created.");
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return { createNewOrder };
};

export default useCreateNewOrder;

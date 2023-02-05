import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useDispatch } from "react-redux";
import {
  addCartItem,
   deleteFavouriteItem,
} from "../../features/products/productSlice";

const FavouriteDetails = ({ cartItem }) => {
  const dispatch = useDispatch();

  const addToCart = (Item) => {
    dispatch(addCartItem({product: Item.product,quantity: 1}));
    dispatch(deleteFavouriteItem({ product: Item.product }));
  }

  const deleteProduct = (Item) => {
    dispatch(deleteFavouriteItem({ product: Item.product }));
  };

  return (
    <Container>
      <Wraper>
        <CartTitle>
          <h2>Default Wish List ({cartItem.length})</h2>
        </CartTitle>
      </Wraper>

      {cartItem &&
        cartItem.map((Item) => {
          return (
            <Wraper key={Item.product._id}>
              <CartProducts>
                <div className="fav_details_box">
                  <div className="img_box">
                    <img src={Item.product.images[0].url} alt="" />
                  </div>

                  <div className="dtails_box">
                    <div className="title">
                      <Link to={`/products/${Item.product._id}`}>
                        {Item.product.name}
                      </Link>
                    </div>

                    <div className="price">
                      <span>BDT ৳{Item.product.price}</span>
                    </div>
                    <div className="shiping">
                      <span>Shipping: BDT ৳5.55</span>
                    </div>
                  </div>
                </div>

                <div className="fav_controller">
                  <IconButton onClick={() => addToCart(Item)} aria-label="favourite" size="large">
                    <ShoppingCartIcon fontSize="large" />
                  </IconButton>
                  <IconButton
                    onClick={() => deleteProduct(Item)}
                    aria-label="delete"
                    size="large"
                    color="error"
                  >
                    <DeleteForeverIcon fontSize="large" />
                  </IconButton>
                </div>
              </CartProducts>
            </Wraper>
          );
        })}
    </Container>
  );
};

export default FavouriteDetails;

const Container = styled.div`
  width: 100%;
  /* min-width: 109rem; */
  /* margin: 1rem; */
`;
const Wraper = styled.div`
  background: #fff;
  padding: 1rem 0 1rem 2rem;
  margin: 1rem 1rem 1rem 0;
  border-radius: 0.5rem;

  h2 {
    font-size: 2.5rem;
    font-weight: 600;
  }
`;
const CartTitle = styled.div``;
const CartProducts = styled.div`
  display: flex;
  justify-content: space-between;

  .fav_details_box{
      display: flex;
    .img_box {
    padding: 0 1rem;
    img {
      width: 12rem;
      height: 12rem;
    }
  }
  .dtails_box {
    .title {
      a {
        font-size: 1.4rem;
      }
    }
    .price {
      margin: 1rem 0;
      span {
        font-weight: 600;
        font-size: 1.6rem;
      }
    }
    .shiping {
      span {
        margin-right: 5px;
        color: #2e9cc3;
        font-weight: 500;
        line-height: 18px;
        font-size: 12px;
      }
    }
  }
  }
 
  .fav_controller {
    width: 12rem;
  }
`;

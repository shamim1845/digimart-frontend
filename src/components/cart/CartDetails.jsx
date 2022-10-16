import React, {useState, useEffect} from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addCartItem, addFavouriteItem, deleteCartItem } from "../../features/products/productSlice";
import { addOrderItem, getAllOrders, removeOrderItem, resetOrderItem } from "../../features/order/orderSlice";

const CartDetails = ({cartItem}) => {
  const [checkList, setCheckList] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const orderdItem = useSelector(getAllOrders);
  // console.log(orderdItem);

  useEffect(() => {
    dispatch(resetOrderItem());
  }, [dispatch])

  const productDecrement = (item) => {
          dispatch(addCartItem({product: item.product, quantity: item.quantity-1}));

          orderdItem && orderdItem.map((check) => {
          if ( check.product._id === item.product._id) {

            let Item = {product: item.product, quantity: item.quantity-1}
            dispatch(addOrderItem({Item}))
          }
          return null;
          })
  }

  const productIncrement = (item) => {
    dispatch(addCartItem({product: item.product, quantity: item.quantity+1}));
    
    orderdItem && orderdItem.map((check) => {
      if ( check.product._id === item.product._id) {

        let Item = {product: item.product, quantity: item.quantity+1}
        dispatch(addOrderItem({Item}))
      }
      return null;
      })
  }
  const deleteProduct = (Item) => {
    dispatch(deleteCartItem({product: Item.product}));

    dispatch(removeOrderItem({Item}));
  }

  const addToCheckList = (e, Item) => {
    if(e.target.checked) {
      dispatch(addOrderItem({Item}));
     }else{
      dispatch(removeOrderItem({Item}));
    }
  }

  const favouriteHandler = (Item) => {
  
    dispatch(addFavouriteItem({product: Item.product}));
    dispatch(deleteCartItem({product: Item.product}))

    dispatch(removeOrderItem({Item}));

    let arr = checkList && checkList.map((item) => (
      item.product._id !== Item.product._id
    ))
    setCheckList(arr);
  }

  const goToProduct = () => {
    navigate("/products")
  }




  return (
    <Container>
      <Wraper>
        <CartTitle>
          <h2>Shopping Cart({cartItem.length})</h2>
        </CartTitle>
      </Wraper>


{
  cartItem && cartItem.map((Item) => {

   return(
    <Wraper key={Item.product._id}>
    <CartProducts>
      <div className="left_box">
      <div className="select_product">
        <input type="checkbox"  onChange={(e) => addToCheckList(e, Item)}/>
      </div>
      <div className="img_box">
        <img
          src={Item.product.images[0].url}
          alt=""
        />
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

      <div className="cart_controller">
        <div className="delete">
          <IconButton onClick={() => favouriteHandler(Item)} aria-label="favourite" size="large">
            <FavoriteBorderIcon fontSize="large" />
          </IconButton>
          <IconButton onClick={() => deleteProduct(Item)} aria-label="delete" size="large" color="error"> 
            <DeleteForeverIcon fontSize="large" />
          </IconButton>
        </div>
        <div className="quantity">
          <div className="set_quantity">
            <button>
              <i
                className="bi bi-dash"
                onClick={() => Item.quantity>1 &&  productDecrement(Item)}
              ></i>
            </button>
            <p>{Item.quantity}</p>
            <button>
              <i
                className="bi bi-plus"
                onClick={() =>Item.quantity<10 && productIncrement(Item)}
              ></i>
            </button>
      
          </div>
        </div>
        <div className="notify">
        {Item.quantity === 10 && <span>Maximum 10 Products</span>}

        <p>  ৳ {Item.product.price * Item.quantity} </p>
        </div>
      </div>
    </CartProducts>
  </Wraper>
   )
  })
}

{
  cartItem.length === 0 && <EmptyContainer>
    <h4>Your cart is empty.</h4>
    <button onClick={() => goToProduct()}>Add Product</button>
  </EmptyContainer>
}
    
    </Container>
  );
};

export default CartDetails;

const Container = styled.div`
  width: 75%;
  /* min-width: 109rem; */
  /* margin: 1rem; */
  @media screen and (max-width: 768px) {
width: 100%;
}
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

  .left_box {
    display: flex;
    
    
  .select_product {
    display: flex;
    justify-content: center;
    align-items: center;
  }
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
        span{
            font-weight: 600;
            font-size: 1.6rem;
        }
    }
    .shiping {
        span{
            margin-right: 5px;
    color: #2e9cc3;
    font-weight: 500;
    line-height: 18px;
    font-size: 12px;
        }
    }
  }
}
  .cart_controller {
    /* background: red; */
    width: 12rem;
    .delete {
      display: flex;
      justify-content: center;
    }
    .quantity {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 1rem;
      p {
        font-family: "Roboto", "san-serif";
        color: #757575;
        word-wrap: break-word;
        font-size: 1.4rem;
        font-weight: 400;
      }
      .set_quantity {
        display: flex;
        justify-content: center;
        align-items: center;

        button {
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          border: none;
          cursor: pointer;
          i {
            font-size: 2rem;
            color: #757575;
          }
        }
        p {
          padding: 0 1rem;
          margin-bottom: 0;
          color: #666;
        }
      }
    }
    .notify{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 1rem;
        span{
            text-align: center;
        }
    }
  }
`;


const EmptyContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100%;

h4{

}
button{
margin-top: 1rem;
border: none;
background-color: tomato;
padding: 1rem 2rem;
font-size: 1.3rem;
border-radius: 0.5rem;
}
`
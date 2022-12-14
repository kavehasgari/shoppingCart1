import React , { useContext } from "react";
import { Link , useHistory} from 'react-router-dom';

//Context
import { CartContext } from "../../Context/CartReducerContext";

//styles
import styled from "./Navbar.module.scss";

//icons
import CartIcon from '../../assets/shopIcon.svg';


const Navbar = () => {

  const { cartReducer } = useContext(CartContext);

  const navigate = useHistory();
  
  return (
    <div className={styled.navbar} >
      <Link to="/" className={styled.productLink}>
        products
      </Link>
      <div className={styled.shopCart} onClick={() => navigate.push('/cart')}>
        <Link to="/cart">
          <img alt="cart-pic" src={CartIcon}></img>
        </Link>
        <span>{cartReducer.totalQuantity}</span>
      </div>
    </div>
  );
};

export default Navbar;

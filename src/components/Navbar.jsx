import React from "react";
import { CartIcon } from "../icons";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  return (
      <nav>
        <div className="nav-center">
          <h3>Redux Toolkit</h3>
          <div className="nav-container">
            <CartIcon />
            <div className="amount-container">
              <p className="total-amount">{cartItems.length}</p>
            </div>
          </div>
        </div>
      </nav>
  );
};

export default Navbar;

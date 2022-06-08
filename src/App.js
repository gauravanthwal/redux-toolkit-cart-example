import { useEffect } from "react";
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotals, getCartItems } from "./features/cart/cartSlice";
import Modal from "./components/Modal";

function App() {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems, isLoading } = cart;

  const modal = useSelector((state) => state.modal);
  const { openModal } = modal;

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems, dispatch]);

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <main>
      {openModal && <Modal />}

      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;

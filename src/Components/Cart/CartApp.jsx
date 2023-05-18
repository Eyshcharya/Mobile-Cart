import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import CartContainer from './CartContainer';
import Navbar from '../Navbar';
import Modal from '../Cart/Modal';
import { calculateTotal } from '../../Features/CartSlice';
// import TestCart from './TestCart';

function CartApp() {
  const { isOpen } = useSelector((store) => store.modal);
  const { cartItems } = useSelector((store) => store.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems]);

  return (
    <div>
      {isOpen && <Modal />}
      <Navbar />
      {/* <TestCart /> */}
      <CartContainer />
    </div>
  );
}

export default CartApp;

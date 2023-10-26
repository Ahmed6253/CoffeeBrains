import { cartActions } from '../store/cart-slice';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Cart() {
  const dispatch = useDispatch();
  const handleClear = (e) => {
    e.preventDefault();
    localStorage.clear();
    dispatch(cartActions.clearCart());
  };
  const cartItemContent = useSelector((state) => state.cart.cartItems);

  const totalprice = useSelector((state) => state.cart.totalAmount);
  return (
    <div className={classes.ItemsModal}>
      <div className={classes.cartHead}>
        <div className={classes.control}>
          <Link to="/checkOut" className={classes.check}>
            Check Out
          </Link>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.2 }}
            onClick={handleClear}
            className={classes.clear}
          >
            Clear
          </motion.button>
        </div>

        <h2>
          Total Price:{' '}
          <span className={classes.totaltext}>{totalprice} EGP</span>
        </h2>
      </div>

      {cartItemContent.length > 0 &&
        cartItemContent.map((item) => (
          <CartItem
            key={item.id}
            id={item.id}
            name={item.name}
            img={item.img}
            price={item.price}
            quantity={item.quantity}
          />
        ))}

      {cartItemContent.length === 0 && (
        <h2 className={classes.emptytext}>Your cart is empty !!</h2>
      )}
    </div>
  );
}

export default Cart;

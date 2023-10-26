import { useSelector } from 'react-redux';
import CheckOutForm from '../components/CheckOutForm';
import { Link } from 'react-router-dom';
import classes from './CheckOut.module.css';

function CheckOut() {
  const cartItems = useSelector((state) => state.cart.totalItems);

  return (
    <>
      {cartItems !== 0 && <CheckOutForm />}
      {!cartItems && (
        <div className={classes.error}>
          <h2>Your cart is empty!! </h2>
          <Link to="/shop" className={classes.btn}>
            Back To Shop
          </Link>
        </div>
      )}
    </>
  );
}

export default CheckOut;

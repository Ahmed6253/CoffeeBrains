import classes from './CartItem.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareMinus } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { cartActions } from '../store/cart-slice';
import { motion } from 'framer-motion';

function CartItem(props) {
  const dispatch = useDispatch();
  const handelRemove = () => {
    dispatch(cartActions.removeFromCart(props.id));
  };
  return (
    <motion.div
      variants={{ visible: { scale: 1 }, hidden: { scale: 0.5 } }}
      className={classes.CartItem}
    >
      <img src={props.img} alt={props.name} />
      <h2>{props.name}</h2>
      <h2>{props.quantity} X</h2>
      <h2>{props.price} EGP</h2>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1.2 }}
        onClick={handelRemove}
      >
        <FontAwesomeIcon className={classes.icon} icon={faSquareMinus} />
      </motion.button>
    </motion.div>
  );
}

export default CartItem;

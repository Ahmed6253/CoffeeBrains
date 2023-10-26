import { useDispatch } from 'react-redux';
import classes from './ProductCrad.module.css';
import { cartActions } from '../store/cart-slice';
import { motion } from 'framer-motion';

function ProductCard(props) {
  const dispatch = useDispatch();
  const handelAddItem = () => {
    const item = {
      id: props.name,
      img: props.img,
      name: props.name,
      price: Number(props.price),
    };

    dispatch(cartActions.addToCart(item));
  };
  return (
    <div className={classes.ProductCard}>
      <img className={props.imgClassName} alt={props.name} src={props.img} />
      <h2>
        {props.name}
        <p>{props.type}</p>
      </h2>
      <h3>{props.price} EGP</h3>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1.2 }}
        onClick={handelAddItem}
      >
        Add to cart
      </motion.button>
    </div>
  );
}

export default ProductCard;

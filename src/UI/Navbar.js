import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';
import logo from '../assets/CoffeeBrainsLogo.png';
import cartImg from '../assets/cart.png';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

function Navbar() {
  const itmesAmount = useSelector((state) => state.cart.totalItems);
  return (
    <div className={classes.Navbar}>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? classes.active : '')}
      >
        HOME
      </NavLink>
      <NavLink
        to="/shop"
        className={({ isActive }) => (isActive ? classes.active : '')}
      >
        SHOP
      </NavLink>
      <NavLink to="/">
        <img src={logo} alt="logo" className={classes.logo} />
      </NavLink>
      <NavLink
        to={'/contact'}
        className={({ isActive }) => (isActive ? classes.active : '')}
      >
        CONTACT
      </NavLink>
      <NavLink
        to={'/cart'}
        className={({ isActive }) => (isActive ? classes.active : '')}
      >
        <img src={cartImg} alt="cart" />
        {itmesAmount > 0 && (
          <motion.span key={itmesAmount} animate={{ scale: [1.5, 1] }}>
            {itmesAmount}
          </motion.span>
        )}
      </NavLink>
    </div>
  );
}

export default Navbar;

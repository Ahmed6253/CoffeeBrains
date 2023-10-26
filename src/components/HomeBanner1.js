import { NavLink } from 'react-router-dom';
import classes from './HomeBanner1.module.css';
import banner1img from '../assets/Coffee_Cup.png';
import { motion } from 'framer-motion';

function HomeBanner() {
  return (
    <div className={classes.wrapper1}>
      <motion.img
        animate={{ scale: [1.2, 1] }}
        transition={{ duration: 1 }}
        src={banner1img}
        alt="CoffeeBrains cup"
      />
      <div className={classes.orderBlock}>
        <motion.h1 animate={{ x: [50, 0] }} transition={{ duration: 1.5 }}>
          The right way<br></br> to start your day
        </motion.h1>
        <NavLink to={'/shop'}>Order Now</NavLink>
      </div>
    </div>
  );
}

export default HomeBanner;

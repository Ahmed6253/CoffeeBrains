import classes from './HomeBanner2.module.css';
import { motion } from 'framer-motion';
import { useScroll } from 'framer-motion';

function HomeBanner2(props) {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      style={{ opacity: scrollYProgress }}
      className={classes.wrapper}
    >
      <motion.h2
        key={props.id}
        animate={{ x: [50, 0] }}
        transition={{ duration: 1 }}
      >
        {props.details}
      </motion.h2>
      <img id={props.id} src={props.img} alt={props.id} />
    </motion.div>
  );
}

export default HomeBanner2;

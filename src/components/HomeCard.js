import classes from './HomeCard.module.css';
import { useState } from 'react';
import { useScroll } from 'framer-motion';
import { motion } from 'framer-motion';

function HomeCard(props) {
  const { scrollYProgress } = useScroll();
  const [id, setId] = useState(props.id);

  const onClick = () => {
    setId(props.id);
    props.getCardId(id);
  };
  return (
    <motion.li
      key={props.id}
      style={{ opacity: scrollYProgress }}
      id={props.id}
      className={classes.Card}
      onClick={onClick}
    >
      <img src={props.img} alt={props.id} />
      <h2>{props.title}</h2>
    </motion.li>
  );
}

export default HomeCard;

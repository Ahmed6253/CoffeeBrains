import classes from './SuccesSubmit.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

function SuccesSubmit() {
  return (
    <div className={classes.success}>
      <FontAwesomeIcon className={classes.icon} icon={faCircleCheck} />
    </div>
  );
}

export default SuccesSubmit;

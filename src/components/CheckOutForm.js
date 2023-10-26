import classes from './ChechOutForm.module.css';
import { InputMask } from 'primereact/inputmask';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, useNavigate } from 'react-router-dom';
import ReactDOM from 'react-dom';

import SuccesSubmit from '../UI/SuccesSubmit';
import { cartActions } from '../store/cart-slice';
import { motion } from 'framer-motion';

function CheckOutForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const totalprice = useSelector((state) => state.cart.totalAmount);
  const [validForm, setValidForm] = useState();
  const [validName, setValedName] = useState(false);
  const checkNameValidation = (e) => {
    if (e.target.value.trim() !== '') {
      setValedName(true);
    } else setValedName(false);
  };
  const [validAddress, setValedAddress] = useState(false);
  const checkAddressValidation = (e) => {
    if (e.target.value.trim() !== '') {
      setValedAddress(true);
    } else setValedAddress(false);
  };
  const [validEmail, setValedEmail] = useState(false);
  const checkEmailValidation = (e) => {
    if (
      e.target.value.trim() !== '' &&
      // eslint-disable-next-line
      /^([a-z0-9_\.\+-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(
        e.target.value.trim()
      )
    ) {
      setValedEmail(true);
    } else setValedEmail(false);
  };
  const [validPhone, setValedPhone] = useState(false);
  const checkPhoneValidation = (e) => {
    if (e.target.value.trim() !== '' && e.target.value.trim().length === 11) {
      setValedPhone(true);
    } else setValedPhone(false);
  };
  const [validCard, setValedCard] = useState(false);
  const checkCardValidation = (e) => {
    if (e.target.value.trim() !== '' && e.target.value.trim().length === 22) {
      setValedCard(true);
    } else setValedCard(false);
  };
  const [validDate, setValedDate] = useState(false);
  const checkDateValidation = (e) => {
    if (e.target.value.trim() !== '' && e.target.value.trim().length === 5) {
      setValedDate(true);
    } else setValedDate(false);
  };
  const [validCVV, setValedCVV] = useState(false);
  const checkCVVValidation = (e) => {
    if (e.target.value.trim() !== '' && e.target.value.trim().length === 3) {
      setValedCVV(true);
    } else setValedCVV(false);
  };
  const submitHandler = () => {
    if (
      !validName ||
      !validAddress ||
      !validEmail ||
      !validPhone ||
      !validCard ||
      !validCVV ||
      !validDate
    ) {
      setValidForm(false);
      return;
    } else {
      setValidForm(true);
      setTimeout(() => {
        setValidForm();
        navigate('/');
        localStorage.clear();
        dispatch(cartActions.clearCart());
      }, 2500);
    }
  };
  return (
    <>
      {validForm === true &&
        ReactDOM.createPortal(
          <SuccesSubmit />,
          document.getElementById('success')
        )}
      <Form onSubmit={submitHandler} className={classes.form}>
        <h2>
          Total Amount: <span className={classes.amount}>{totalprice} EGP</span>
        </h2>
        <label htmlFor="name">Full Name</label>
        <input
          className={
            !validName && validForm === false ? classes.invalid : undefined
          }
          type="text"
          name="name"
          id="name"
          onChange={checkNameValidation}
          placeholder="Ahmed Mohamed"
        />
        <label htmlFor="address">Address</label>
        <input
          className={
            !validAddress && validForm === false ? classes.invalid : undefined
          }
          type="text"
          name="address"
          id="address"
          onChange={checkAddressValidation}
          placeholder="El haram st - Giza"
        />
        <label htmlFor="email">Email</label>
        <input
          className={
            !validEmail && validForm === false ? classes.invalid : undefined
          }
          type="text"
          name="email"
          id="email"
          onChange={checkEmailValidation}
          placeholder="example@gmail.com"
        />
        <label htmlFor="phone">Phone Number</label>
        <InputMask
          className={
            !validPhone && validForm === false ? classes.invalid : undefined
          }
          mask="99999999999"
          slotChar=""
          name="phone"
          id="phone"
          onChange={checkPhoneValidation}
          placeholder="01152327203"
        />
        <label htmlFor="card">Card Number</label>
        <InputMask
          className={
            !validCard && validForm === false ? classes.invalid : undefined
          }
          mask="9999  9999  9999  9999"
          placeholder="2314  2351  7341  1234"
          slotChar=""
          name="card"
          id="card"
          onChange={checkCardValidation}
        />
        <div className={classes.cardDetails}>
          <label htmlFor="expiration">Expiration Date</label>
          <InputMask
            className={
              !validDate && validForm === false ? classes.invalid : undefined
            }
            mask="99/99"
            slotChar=""
            placeholder="MM/YY"
            name="expiration"
            id="expiration"
            onChange={checkDateValidation}
          />
          <label htmlFor="cvv">CVV</label>
          <InputMask
            className={
              !validCVV && validForm === false ? classes.invalid : undefined
            }
            mask="999"
            slotChar=""
            placeholder="CVV"
            name="cvv"
            id="cvv"
            onChange={checkCVVValidation}
          />
        </div>
        {validForm === false && (
          <p className={classes.error}>
            Invalid data, check your inputs and try again.
          </p>
        )}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1.2 }}
          type="submit"
        >
          Submit
        </motion.button>
      </Form>
    </>
  );
}

export default CheckOutForm;

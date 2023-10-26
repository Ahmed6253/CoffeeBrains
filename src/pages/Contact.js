import classes from './Contact.module.css';
import { useState } from 'react';
import { Form, useNavigate } from 'react-router-dom';
import ReactDOM from 'react-dom';
import SuccesSubmit from '../UI/SuccesSubmit';
import { motion } from 'framer-motion';

function Contact() {
  const navigate = useNavigate();
  const submitHandler = () => {
    if (!validName || !validEmail || !validMessage || !validSubject) {
      setValidForm(false);
      return;
    } else {
      setValidForm(true);
      setTimeout(() => {
        setValidForm();
        navigate('/');
      }, 2500);
    }
  };
  const [validForm, setValidForm] = useState();
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
  const [validName, setValedName] = useState(false);
  const checkNameValidation = (e) => {
    if (e.target.value.trim() !== '') {
      setValedName(true);
    } else setValedName(false);
  };
  const [validSubject, setValedSubject] = useState(false);
  const checkSubjectValidation = (e) => {
    if (e.target.value.trim() !== '') {
      setValedSubject(true);
    } else setValedSubject(false);
  };
  const [validMessage, setValedMessage] = useState(false);
  const checkMessageValidation = (e) => {
    if (e.target.value.trim() !== '') {
      setValedMessage(true);
    } else setValedMessage(false);
  };
  return (
    <>
      {validForm === true &&
        ReactDOM.createPortal(
          <SuccesSubmit />,
          document.getElementById('success')
        )}
      <Form onSubmit={submitHandler} className={classes.form}>
        <label htmlFor="Name">Name</label>
        <input
          type="text"
          id="Name"
          onChange={checkNameValidation}
          placeholder="Name"
        />
        <label htmlFor="Email">Email</label>
        <input
          type="text"
          id="Email"
          onChange={checkEmailValidation}
          placeholder="Email"
        />
        <label htmlFor="Subject" onChange={checkSubjectValidation}>
          Subject
        </label>
        <input
          type="text"
          id="Subject"
          onChange={checkSubjectValidation}
          placeholder="Subject"
        />
        <label htmlFor="Message">Message</label>
        <textarea
          id="Message"
          onChange={checkMessageValidation}
          placeholder="Your message"
        />
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
          Send
        </motion.button>
      </Form>
    </>
  );
}

export default Contact;

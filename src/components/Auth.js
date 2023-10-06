import classes from './Auth.module.css';
import { authActions } from '../Store/auth-slice';
import { UseSelector, useDispatch, useSelector } from 'react-redux';
import { useRef } from 'react';

const Auth = () => {
  const mailRef = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch();

  const submitBtnHandler = (event) => {
    event.preventDefault();
    const mail = mailRef.current.value;
    const password = passwordRef.current.value;
    dispatch(authActions.loggin())
  }
  return (
    <main className={classes.auth}>
      
      <section>
        <form onSubmit={submitBtnHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input ref={mailRef} type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input ref={passwordRef} type='password' id='password' />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;

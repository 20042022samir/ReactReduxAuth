import classes from './Header.module.css';
import { UseSelector, useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { authActions } from '../Store/auth-slice';

const Header = () => {
  const isAutenticated = useSelector(state => state.auth.isAutenticated);
  const dispatch=useDispatch();
  const logoutBtnHandler=()=>{
    dispatch(authActions.logout())
  }
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <div>
        {
          isAutenticated
          &&
          <h2>Logged In!</h2>
        }
      </div>
      <nav>
        {
          isAutenticated
          &&
          <ul>
            <li>
              <a href='/'>My Products</a>
            </li>
            <li>
              <a href='/'>My Sales</a>
            </li>
            <li>
              <button onClick={logoutBtnHandler}>Logout</button>
            </li>
          </ul>
        }
      </nav>
    </header>
  );
};

export default Header;

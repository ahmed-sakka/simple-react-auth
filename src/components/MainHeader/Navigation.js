import React, { useContext } from 'react';
import AuthContext from '../../store/auth-context';

import classes from './Navigation.module.css';

const Navigation = (props) => {
  const authCtx = useContext(AuthContext);
  return (
    <nav className={classes.nav}>
      <ul>
        {authCtx.isLoggedIn && (
          <>
            <li>
              <a href='/'>Users</a>
            </li>
            <li>
              <a href='/'>Admin</a>
            </li>
            <li>
              <button onClick={authCtx.onLogout}>Logout</button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;

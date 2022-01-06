import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { userContext } from '../../App';

const PrivateRoute=({ children, ...rest })=> {
    const [auths]=useContext(userContext)
    
    return (
      <Route
        {...rest}
        render={({ location }) =>
          auths.name || sessionStorage.getItem('email') || sessionStorage.getItem("name")? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }
export default PrivateRoute;
import React from 'react';

import { Redirect, Route } from 'react-router-dom';

function teste(){
    return true
}

export const PrivateRoutes = ({ component: Component, ...rest }) => (

    <Route
        {...rest}
        render={props => 
         teste() ? (
             <Component {...props} />
         ) : (
             <Redirect 
                to={{
                    pathname: "/",
                    state: {from: props.location}
                }}
            />
         )  
        }
    />
)
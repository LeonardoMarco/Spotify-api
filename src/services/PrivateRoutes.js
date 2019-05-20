import React from 'react';

import { Redirect, Route } from 'react-router-dom';

function validation() {
    let vars = [], hash;
    let hashes = window.location.href.slice(window.location.href.indexOf('#') + 1).split('&');
    for (let i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    if (vars.access_token == undefined) {
        return false;
    } else {
        return true;
    }
    
}

export const PrivateRoutes = ({ component: Component, ...rest }) => (

    <Route
        {...rest}
        render={props =>
            validation() ? (
                <Component {...props} />
            ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: props.location }
                        }}
                    />
                )
        }
    />
)
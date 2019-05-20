import React from 'react';

import './Auth.css';

function Auth() {

 
  return (
    <div className="vh-100 text-center">
        <div className="container-auth">
            <div className="bg-dark p-5 ml-5 mr-5 row-auth">
            <img src="https://logodownload.org/wp-content/uploads/2016/09/Spotify-logo.png" width="200" className="mb-5" alt="logo-spotify"/>
                <h3 className="font-weight-bold text-light">Faça login no spotify para continuar</h3>
                <a href="https://accounts.spotify.com/authorize?client_id=b9ec042a66474cdcac5ee737f6d47191&response_type=token&redirect_uri=http://localhost:3000/main&scope=user-read-private%20user-read-email&state=34fFs29kd09" className="btn btn-success">Login</a>
            </div>
        </div>
    </div>
  );
}


export default Auth;

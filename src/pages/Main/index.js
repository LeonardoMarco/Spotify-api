import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import './Main.css'

import Search from '../../components/Search';
import Albums from '../../components/Albums';
import Tracks from '../../components/Tracks';
import Artists from '../../components/Artists';

function Main() {

  const [token, setToken] = useState('')
  const [results, setResults] = useState([])

  useEffect(() => {
      var vars = [], hash;
      var hashes = window.location.href.slice(window.location.href.indexOf('#') + 1).split('&');
      for(var i = 0; i < hashes.length; i++)
      {
         hash = hashes[i].split('=');
         vars.push(hash[0]);
         vars[hash[0]] = hash[1];
      }
      setToken(vars.access_token);
      console.log(vars.access_token)
    
  }, []);

  function onSubmitForm(e, value){
    e.preventDefault()

    Axios.get(`https://api.spotify.com/v1/search?q=${value}&type=track%2Cartist%2Calbum`, {
      headers: {
        "Content-Type":"application/json",
        "Authorization": `Bearer ${token}`
      }
    }).then(res => {
      setResults(res.data)
      console.log(res.data)
    })
  }

  

  return (
    <div className="vh-100">
      <Search function={(e, value) => onSubmitForm(e, value)} />
      
      <ul className="nav nav-tabs" id="myTab" role="tablist">
      <li className="nav-item">
        <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Albums</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Tracks</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Artists</a>
      </li>
    </ul>
    <div className="tab-content" id="myTabContent">
      <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
        <Albums results={results} />
      </div>
      <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
        <Tracks results={results} />
      </div>
      <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
        <Artists results={results} />
      </div>
    </div>

    </div>
  );
}


export default Main;

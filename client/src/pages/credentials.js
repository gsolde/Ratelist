import React from 'react';
import { Redirect } from 'react-router-dom'


function Credentials () {
  
  const search = window.location.search;
  const params = new URLSearchParams(search);
  
  const token = params.get('token');
  const userName = params.get('username');

  localStorage.setItem('token', token);
  localStorage.setItem('userName', userName);
    
    return (
        <Redirect to="/searchRate" />
      );

}

export default Credentials

import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ChatAppComonents from "../components/ChatApp/ChatAppComonents";
import SignUpComponent from '../components/SignUpComponent/SignUpComponent'
import SignIpComponent from '../components/SignInComponent/SignIpComponent'

export default function (props) {
  return (
    <Router>
      <Route path='/' exact component={ChatAppComonents} />
      <Route path='/auth/sign-up' exact component={SignUpComponent} />
      <Route path='/auth/login' exact component={SignIpComponent} />
    </Router>
  )
}
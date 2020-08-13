import React from 'react';
// import axios from 'axios';
import './Index.css';
import { Link } from 'react-router-dom';

class Signin extends React.Component {

  render() {
    return(
      <div>
        <h1>SignIn</h1>
        {/* TODO : 소셜로그인 구현 */}
        <a href="https://www.google.com/" class="fa fa-google"/>
        <a href="https://www.linkedin.com/" class="fa fa-linkedin"/>
        <a href="https://www.facebook.com/" class="fa fa-facebook"/>
        <p> Or with Email</p>
        <form>
          ID : <input type="text"/>
          &nbsp;
          PW : <input type="password"/>  
          &nbsp;
          <Link to={{pathname:'/main'}}>
            <button className='signin'>Sign In</button>
          </Link>
        </form>
        <a href='#' className='forgot'>forgot?</a>
      </div>

    )
  }
}

export default Signin;

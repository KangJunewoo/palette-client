import React from 'react';
// import axios from 'axios';
import './Index.css';
import {Link} from 'react-router-dom';

class Index extends React.Component {
  // state = {
      // 필요하면 설정 고고~
  // };

  // axios로 데이터 받는 부분

  render() {
    // 필요하면 state 불러오고
    // const { stateA, stateB } = this.state;
    return(
      <div>
        <h1>Welcome to Palette!</h1>
        <p>description</p>
        <Link to={{pathname:'/signin'}}>signin</Link>
        &nbsp;/&nbsp;
        <Link to={{pathname:'/signup'}}>signup</Link>
      </div>

    )
  }
}

export default Index;

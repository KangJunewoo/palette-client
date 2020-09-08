import React from 'react';
// import axios from 'axios';
import './Index.css';
import {Link} from 'react-router-dom';

class Index2 extends React.Component {
  // state = {
      // 필요하면 설정 고고~
  // };

  // axios로 데이터 받는 부분

  render() {
    // 필요하면 state 불러오고
    // const { stateA, stateB } = this.state;
    return(
      <div>
        <h1>Palette</h1>
        <p>Welcome, Subin Park!</p>
        <Link to={{pathname:'/home'}}>
          <button className='signin'>Home</button>
        </Link>
        &nbsp;/&nbsp;
        <Link to={{pathname:'/portfolio'}}>
          <button class='signup'>My Portfolios</button>
        </Link>
        &nbsp;/&nbsp;
        <Link to={{pathname:'/activity'}}>
          <button className='signin'>Browse Activities</button>
        </Link>
        &nbsp;/&nbsp;
        <Link to={{pathname:'/setting'}}>
          <button class='signup'>Settings</button>
        </Link>
      </div>

    )
  }
}

export default Index2;

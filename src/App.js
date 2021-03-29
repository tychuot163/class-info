import React, { Component } from 'react';
import userData from './data/UserData.json';
import ProfileHeader from './components/ProfileHeader';
import ProfileBody from './components/ProfileBody';
import './styles/colours.css';
import './App.css';
import { Row, Col } from 'antd';

class App extends Component {
  state = {
    userData: userData,
    isDarkMode: false
  };

  render() {
    const { userData } = this.state;
    return (
      <div className={'app-container light'}>
        <div className='app'>
          <ProfileHeader userData={userData} />
          
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';

/*  
    GIVE ME THE DATA!
    ------------
    For now, our data store is a file.
    In the future, you can think of this as being
    another 'server' or storage solution, maybe a:
    - database (MySQL, Postgres);
    - compressed file (zip, gzip);
    - txt file (.txt, .csv)
    The possibilities are endless!
*/
import userData from './data/UserData.json';

/*    
    BEGINNINGS OF A UI
    ------------
    Here, we start 'composing' our UI. Similar to the examples
    we saw in the earlier presentation, we are starting to
    include and define smaller portions of our UI.
    The overall structure of our Profile Page is:
    ---------------------------------------------
      (o) DARK MODE TOGGLE
    ---------------------------------------------
          HEADER (w/ Avatar, Name, ...)
    ---------------------------------------------
          BODY (w/ TabList, Cards, ...)
    ---------------------------------------------
    Here, we start including these different parts.
*/
import DarkModeToggle from './components/Toggle';
import ProfileHeader from './components/ProfileHeader';
import ProfileBody from './components/ProfileBody';

/*    
    ADDING STYLE
    ------------
    The following two lines are where we include our
    CSS stylesheets for sprucin' up the page!
    -> colours.css contains references to different
       colours being used throughout the application;
    -> App.css contains CSS specific to the App component
       we are currently defining in JavaScript!
*/
import './styles/colours.css';
import './App.css';

/*
    REACT IN ACTION
    ------------ 
    Here begins our journey in writing our first React 
    component! From top to bottom, check out the different 
    parts of this component!
*/
// (1) Defining the React Component;
class App extends Component {
  // (2) Setting up some initial state!
  state = {
    userData: userData,
    isDarkMode: false
  };

  /* (3) Defining functions! */
  // (3.1) A function for dark mode.
  toggleDarkMode = () => {
    const currentDarkModeState = this.state.isDarkMode;
    this.setState({ isDarkMode: !currentDarkModeState });
  };

  // (3.2) The render function!
  render() {
    const { userData, isDarkMode } = this.state;
    const darkModeClass = isDarkMode ? 'dark' : 'light';

    return (
      <div className={'app-container ' + darkModeClass}>
        <div className='app'>
          <DarkModeToggle
            isDarkMode={isDarkMode}
            toggleDarkMode={this.toggleDarkMode}
          />
          <ProfileHeader userData={userData} />
          <ProfileBody userDetails={userData.details} />
        </div>
      </div>
    );
  }
}

/* 
  "Export" allows the component to be imported and used in other files. 
  We are using default exports throughout the project as it is convention 
  for React (with one class per file). The alternative is "named exports", 
  see the following for differences between default and named exports:
  LINK: 
  https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export
*/
export default App;

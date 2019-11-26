import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

//Components
import Login from './containers/Login/Login';
import Categories from './containers/Categories/Categories';

//Logo and styling
import logo from './assets/joole.png';
import './App.css';

class App extends Component {
  componentDidMount() {
    console.log(this.props);
  }

  render() {
    let routes = (
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/categories" component={Categories} />
        <Redirect to="/login" />
      </Switch>
    );

    if(this.props.isLoggedIn){
        //Addtioinal routes here
    }

    return (
      <div>
        {routes}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.login.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {

  };
};

export default withRouter( connect(mapStateToProps, mapDispatchToProps)(App));

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/
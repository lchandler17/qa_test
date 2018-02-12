// IMPORT REACT
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { MemoryRouter as Router, withRouter } from 'react-router-dom'

// INCLUDE SUBCOMPONENTS
import Main from './main';
import Navbar from './nav';
import About from './about';
import Signin from './signin';
import Signup from './signup';
import Election from './election';
import Vote from './vote';
import Results from './results';

// CREATE INDEX COMPONENT
export default class Index extends Component{

  constructor(props){
    super(props);
    this.state = { 
      user: '', 
      loggedIn: false 
    };
  }

  // componentWillMount(){
  //   // get user data in session and save in state
  //   axios.get('/user').then((response) => {
  //     console.log(response.data.user);
  //     let user = response.data.user;
  //     if(user){
  //       this.setState({user: user, loggedIn: true})
  //     }
  //     else{
  //       this.setState({ user: '', loggedIn: false });
  //     }
  //   })
  // }

  // RENDER
  render() {
    return (

      <div className="">
      <Router>
        <div>

          <Navbar user={this.state.user} loggedIn={this.state.loggedIn} />

          <div id="bodysection">

            <Switch>
                <Route exact path='/' component={Main} />
                <Route path='/about' component={About} />
                <Route path='/signin' component={Signin} />
                <Route path='/signup' component={Signup} /> 
                <Route path='/election' component={Election} /> 
                <Route path='/vote' component={Vote} />
                <Route path='/results' component={Results} />
            </Switch>

          </div>

        </div>

      </Router>
      </div>

    );
  }
}

// EXPORT COMPONENT
module.exports = Index;

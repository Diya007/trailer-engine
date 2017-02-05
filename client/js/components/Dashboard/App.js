var React = require('react');
var connect = require('react-redux').connect;
var actions = require('../../actions/index');

var TitleList = require('../MovieResults/list');

var Login = require('../Login/login')

var Hero = require('./hero');

var Logo = require('./logo');

var App = React.createClass({
  getInitialState: function() {
    return{show: false}
  },

  fetchTerm: function(){  
    var requestTerm = this.refs.requestTerm.value;
    if(requestTerm!=="") {
      this.props.dispatch(actions.fetchResults(requestTerm));
      console.log(this.props.items)
    }
    else if(requestTerm ==""){
      alert('Please type in a movie name');
    }
    this.refs.requestTerm.value = "";
    this.setState({show: true})
  },
  render: function() {
    return (
      <div> 
        <header className="Header">
          <Logo />  
          <div id="search" className="Search">
              <input type="text" placeholder="Search for a title..." ref="requestTerm" />
          </div> 
          <div id="enter">
            <button id="enter" type ="button" onClick ={this.fetchTerm} > Enter </button>
          </div>
          <Login />
        </header>
        <Hero />
        {this.state.show ? <TitleList title="Search Results" items={this.props.items} /> : null}    
      </div>
    );
  }
});


function mapStateToProps(state) {
  return {
    items: state.items,
    loginError: state.loginError
  }
}

var Container = connect(mapStateToProps)(App);
module.exports = Container;
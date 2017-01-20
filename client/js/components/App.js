var React = require('react');
//var SweetAlert = require('react-bootstrap-sweetalert');

var connect = require('react-redux').connect;
var actions = require('../actions/index');
var TitleList = require('./list');
var Hero = require('./hero');
var Logo = require('./Logo');


var App = React.createClass({
  fetchTerm: function(){
    var requestTerm = this.refs.requestTerm.value;
    if(requestTerm!=="") {
      this.props.dispatch(actions.fetchResults(requestTerm));
    }
    else if(requestTerm ==""){
      alert('Please type in a movie name');
       //this.fetchAlert();
    }
    this.refs.requestTerm.value = "";
  },
  render: function() {
    return (
      //console.log(this.state.show)
      <div> 
        <header className="Header">
          Hello
          <Logo />  
          <div id="search" className="Search">
              <input  type="text" placeholder="Search for a title..." ref="requestTerm" />
          </div> 
          <div id="enter">
            <button id="enter" type ="button" onClick ={this.fetchTerm} > Enter </button>
          </div>
        </header>
        <Hero />
        <TitleList title="Search Results" /> 

      </div>

    );
  }

});


function mapStateToProps(state) {
  return {
    items: state.items,
  }
}

var Container = connect(mapStateToProps)(App);
module.exports = Container;
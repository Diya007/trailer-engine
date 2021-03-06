var React = require('react');
var connect = require('react-redux').connect;
var actions = require('../../actions/index');

var ReactToastr = require("react-toastr");
var {ToastContainer} = ReactToastr;
var ToastMessageFactory = React.createFactory(ReactToastr.ToastMessage.animation);
var Copy = require('react-icons/lib/fa/copyright');

var TitleList = require('../MovieResults/list');
var Login = require('../Login/login')
var Hero = require('./hero');
var Logo = require('./logo');

var App = React.createClass({
  getInitialState: function() {
    return{show: false}
  },

  fetchTerm: function(event) { 
    event.preventDefault(); 
    var requestTerm = this.refs.requestTerm.value;
    if(requestTerm!=="") {
      this.props.dispatch(actions.fetchResults(requestTerm));
      // try pop up warning , if items = nulll
      if(this.props.items === null) {
        console.log('works')
        this.refs.container.warning("Please login first");
      }
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
        <ToastContainer ref="container" toastMessageFactory={ToastMessageFactory} className="toast-top-right" />
        <header className="Header">
          <Logo /> 
          <form onSubmit={this.fetchTerm}> 
            <div id="search" className="Search">
                <input type="text" placeholder="Search for a title..." ref="requestTerm" />
            </div> 
          </form>
          <Login />
        </header>

        <div className="wrap">
          <Hero />
          {this.state.show ? <TitleList title="Search Results" items={this.props.items} /> : null} 
        </div> 

        <footer> <Copy size={20} />Made by Diya Zhao</footer>
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
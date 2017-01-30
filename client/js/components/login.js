var React = require('react');
var actions = require('../actions/index');
var connect = require('react-redux').connect;

var Login = React.createClass({
 fetchUsername: function() {
 	console.log('button works')
 	var username = this.refs.username.value;
 	if(username !== "") {
 		 this.props.dispatch(actions.registerRequest(username));
 		// this.props.dispatch(actions.registerRequest(this.refs));
 	}
 	else if(username == "") {
 		alert('please login')
 	}
 	this.refs.username.value = "";

 },
 render: function() {
    return (
         <div className="Login">
	         <input id="login" ref="username"></input>
	         <button id="login" onClick={this.fetchUsername}>Login</button>        
         </div>
      
    );
  }
})


// add  a box for tying into email;
// hide the text box and show the email i typed in; 
//add case statement into the reducer, need 

//fetch("/login", { method: "POST", body: form });
var Container = connect()(Login);
module.exports = Container;


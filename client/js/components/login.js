var React = require('react');
var actions = require('../actions/index');
var connect = require('react-redux').connect;

var Login = React.createClass({
 getInitialState: function() {
 	return {show: true};
 }, 

 fetchUsername: function() {
 	
 	var username = this.refs.username.value;
 	if(username !== "") {
 		console.log('button works')
 		this.props.dispatch(actions.registerRequest(username));
 		// this.props.dispatch(actions.registerRequest(this.refs));
 		this.setState({show: false})
 	}
 	else if(username == "") {
 		alert('please login')
 	}
 	this.refs.username.value = "";

 },
 render: function() {
    return (
        <div className="Login">
	        {this.state.show ? <input id="login" ref="username"></input> :  <Profile profileName={this.props.currentUser} />}
	        {this.state.show ? <button id="login" onClick={this.fetchUsername}>Login</button> : null}
	                
        </div> 
    );
  }
})


var Profile = React.createClass({
	render: function() {
		return (
			<div className="profile">
				{this.props.profileName}
		    </div>

		)
	}
})

function mapStateToProps(state) {
	return {
		currentUser: state.currentUser
	}
}

var Container = connect(mapStateToProps)(Login);
module.exports = Container;


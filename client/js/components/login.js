var React = require('react');
var actions = require('../actions/index');
var connect = require('react-redux').connect;
var Profile = require('./profile');

var Login = React.createClass({
 getInitialState: function() {
 	return {show: true};
 }, 

 fetchUsername: function() {
 	var username = this.refs.username.value;
 	if(username !== "") {
 		this.props.dispatch(actions.registerRequest(username));
 		console.log("after dispatch registerRequest",this.props.currentUser)
 		//console.log("after dispatch registerRequest",state)
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
	        {this.state.show ? <input id="login" ref="username"></input> :  <Profile profileName={this.props.currentUser} movieList={this.props.payloadMovieList} />}
	        {this.state.show ? <button id="login" onClick={this.fetchUsername}>Login</button> : null}                
        </div> 
    );
  }
})


function mapStateToProps(state) {
	console.log('in map state to prop',state)
	return {
		currentUser: state.currentUser,
		payloadMovieList: state.fetchedMovieLists
	}
}

var Container = connect(mapStateToProps)(Login);
module.exports = Container;


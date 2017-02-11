var React = require('react');
var actions = require('../../actions/index');
var connect = require('react-redux').connect;
var Profile = require('./profile');

var ReactToastr = require("react-toastr");
var {ToastContainer} = ReactToastr;
var ToastMessageFactory = React.createFactory(ReactToastr.ToastMessage.animation);

var Login = React.createClass({
 getInitialState: function() {
 	return {show: true};
 }, 
 fetchUsername: function() {
 	var username = this.refs.username.value;
 	if(username !== "") {
 		this.props.dispatch(actions.registerRequest(username));
 		this.setState({show: false})
 	}
 	if(username === "") {		
 		this.refs.container.warning("Please type in a username");
 	}

 	this.refs.username.value = "";
 },
 render: function() {
    return (
        <div className="Login" >  	
        	<form className="loginForm" onSubmit={this.fetchUsername}>
		        {this.state.show ? <input id="login" ref="username"></input> :  <Profile profileName={this.props.currentUser} movieList={this.props.payloadMovieList} />}
		        {this.state.show ? <button id="login" onClick={this.fetchUsername} >Login</button> : null}
	        </form> 
	        <ToastContainer ref="container" toastMessageFactory={ToastMessageFactory} className="toast-top-right" />	                
        </div> 
    );
  }
})
  
//{!this.state.show ? <button>Logout</button> : null}
 
function mapStateToProps(state) {
	return {
		currentUser: state.currentUser,
		payloadMovieList: state.fetchedMovieLists
	}
}

var Container = connect(mapStateToProps)(Login);
module.exports = Container;


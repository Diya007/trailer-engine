var React = require('react');
var connect = require('react-redux').connect;
var actions = require('../../actions/index');

var ReactToastr = require("react-toastr");
var {ToastContainer} = ReactToastr;
var ToastMessageFactory = React.createFactory(ReactToastr.ToastMessage.animation);

var ListToggle = React.createClass({
  addMovie: function() {
      var movieItem = this.props.movieItem;
      var movieTitle = this.props.movieTitle;
      if ( this.props.currentUser == null) {
        this.refs.container.warning("Please login first");
      }
      else{
        // add videoId to server 
        this.props.dispatch(actions.addMovies(movieItem));
        if(this.props.loginError == null) {
          this.refs.container.success("The trailer is in your list now!")
        }
      }
  },
  render: function() {
    return (
      <div>
        <ToastContainer ref="container" toastMessageFactory={ToastMessageFactory} className="toast-top-right" />
        <button  onClick={this.addMovie}  id="toggle" type="button" >
          Add
        </button>
      </div>   
    )
  }
})

function mapStateToProps(state) {
  return {
    loginError: state.loginError,
    currentUser: state.currentUser
  }
}

var Container = connect(mapStateToProps)(ListToggle);
module.exports = Container;


var React = require('react');
var connect = require('react-redux').connect;
var actions = require('../../actions/index');

var ReactToastr = require("react-toastr");
var {ToastContainer} = ReactToastr;
var ToastMessageFactory = React.createFactory(ReactToastr.ToastMessage.animation);
var Add = require('react-icons/lib/fa/plus');

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
        <div className="add-to-list" onClick={this.addMovie} id="toggle"><Add size={40} /></div>
        <div className="tooltiptextInToggle">click to add to the list</div>
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


var React = require('react');
var connect = require('react-redux').connect;
var actions = require('../../actions/index');

var ListToggle = React.createClass({
  addMovie: function() {
      var movieTitle = this.props.movieTitle;
      if ( this.props.currentUser == null) {
        alert('Please login first')
      }
      else{
        this.props.dispatch(actions.addMovies(movieTitle));
        if(this.props.loginError == null) {
          alert('add movie to list successfully')
        }
      }

  },
  render: function() {
    return (
      <button  onClick={this.addMovie}  id="toggle" type="button" >
        Add
      </button>   
    );
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


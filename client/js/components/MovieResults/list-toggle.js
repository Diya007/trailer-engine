var React = require('react');
var connect = require('react-redux').connect;
var actions = require('../../actions/index');

var ListToggle = React.createClass({
  addMovie: function() {
      var movieItem = this.props.movieItem;
      var movieTitle = this.props.movieTitle;
      if ( this.props.currentUser == null) {
        alert('Please login first')
      }
      else{
        // add videoId to server 
        this.props.dispatch(actions.addMovies(movieItem));
        if(this.props.loginError == null) {
          alert('add movie to list successfully')
        }
      }
  },

  render: function() {
    //this.props 可以平级使用， 从 list->item -> listToggle
    //var movieItem = this.props.movieItem;
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


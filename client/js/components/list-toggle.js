var React = require('react');
var connect = require('react-redux').connect;
var addMovies = require('../actions/index').addMovies;
var actions = require('../actions/index');

var ListToggle = React.createClass({
  addMovie: function() {
      var movieTitle = this.props.movieTitle;
      //this.props.addMovie(movieTitle); 
      this.props.dispatch(actions.addMovies(movieTitle));

      if (this.props.loginError !== null) {
        //when I login in the loginError should be set to null again 
        alert('Please login first')
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
    loginError: state.loginError
  }
}

var Container = connect(mapStateToProps)(ListToggle);
module.exports = Container;


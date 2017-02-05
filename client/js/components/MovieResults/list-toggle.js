var React = require('react');
var connect = require('react-redux').connect;
var actions = require('../../actions/index');

var ListToggle = React.createClass({
  addMovie: function() {
      var movieTitle = this.props.movieTitle;
      //this.fetchMovieTitle(movieTitle); 
      this.props.dispatch(actions.addMovies(movieTitle));
      if (this.props.loginError !== null) {
        //when I login in the loginError should be set to null again 
        //add sweet alert for alert
        alert('Please login first')
      }
      if(this.props.loginError == null) {
        alert('add movie to list successfully')
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


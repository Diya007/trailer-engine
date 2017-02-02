var React = require('react');
var connect = require('react-redux').connect;
var addMovies = require('../actions/index').addMovies;



var ListToggle = React.createClass({
  addMovie: function() {
      var movieTitle = this.props.movieTitle;
      this.props.addMovie(movieTitle); 
      //this.props.dispatch(actions.fetchResults(movieTitle));
      //console.log(movieTitle)
  },

  render: function() {
    return (
      <button  onClick={this.addMovie}  id="toggle" type="button" >
        Add
      </button>
      
    );
  }
})

function mapDispatchToProps (dispatch) {
    return {
        addMovie: function(title) {
            dispatch(addMovies(title));
        }
    };
}


//var Container = connect()(ListToggle);

module.exports = connect(null, mapDispatchToProps)(ListToggle);

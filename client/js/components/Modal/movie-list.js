var React = require('react');
var Movie = require('./movie');	


var MovieList = React.createClass({

	render: function() {
		var movies = this.props.movieList.map(function(movie, i) {
			var title = movie.title;
			console.log(movie.title)
			return <Movie key={movie._id} title={title} />
		})

		return ( 
			<div> 
				{movies}
			</div>
		)
	}
})

module.exports = MovieList;
var React = require('react');
var Movie = require('./movie');	

import { Tooltip, OverlayTrigger, ButtonToolbar, DropdownButton, MenuItem} from 'react-bootstrap';
//import ScrollArea from 'react-scrollbar';

var MovieList = React.createClass({

	render: function() {
		if (! this.props.movieList) {
			alert ('please add some movies first');
		}
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
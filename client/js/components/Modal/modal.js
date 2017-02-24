var React = require('react');
var Modal = require('react-modal');
var MovieList = require('./movie-list');
var Movie = require('./movie');
var FaTrash = require('react-icons/lib/fa/trash');

var ReuseModal = React.createClass({

	render: function() {
	    var movieList = this.props.movieList;

	    var customStyle={
	    	overlay: {
	    		position  : 'fixed',
	    		//top: '100px',
			    backgroundColor : 'rgba(255, 255, 255, 0)',
			    zIndex :'1000'
	    	},
		  	content: {
			    position : 'absolute',
			    top : '20%',
			    left : '60%',
			    right : '5%',
			    border : '5px solid rgba(204, 204, 204, 0.33)',
			    background : 'rgba(195, 114, 41, 0.69)',
			    overflow : 'auto',
			    WebkitOverflowScrolling : 'touch',
			    borderRadius : '37px',
			    outline : 'none',
		 	}
		}
		//var savedMovies = this.props.movieList
		var savedMovies = this.props.movieList.map(function(savedMovie, i) {
			return <Movie key={i} link={savedMovie.movieLink} title={savedMovie.title} movie={savedMovie}  />
		})
		return (
			<div>
				<Modal style={customStyle} isOpen={this.props.show}  onRequestClose={this.props._close} contentLabel="Modal">
					<h2>Favorite List</h2>			
					{savedMovies}						
				</Modal>
			</div>
		)
    }
})

module.exports = ReuseModal;
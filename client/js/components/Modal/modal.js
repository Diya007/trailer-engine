var React = require('react');
var Modal = require('react-modal');
var MovieList = require('./movie-list');
var Movie = require('./movie');
var FaTrash = require('react-icons/lib/fa/trash');

var ReuseModal = React.createClass({

	render: function() {
	    var movieList = this.props.movieList;
	    // console.log(movieList.movieLink.replace("watch?v=", "embed/"))
	    var customStyle={
	    	overlay: {
	    		position  : 'fixed',
			    zIndex :'1000'
	    	},
		  	content: {
		  		width: '40%',
			    position : 'absolute',
			    left: '52%',
			    top : '20%',
			    right : '5%',
			    bottom: '40px',
			    border : '5px solid rgba(204, 204, 204, 0.33)',
			    background : 'rgb(195, 114, 41)',
			    overflow : 'auto',
			    borderRadius : '37px',
			    outline : 'none',
		 	}
		}
		//var savedMovies = this.props.movieList
		var savedMovies = this.props.movieList.map(function(savedMovie, i) {
			return <Movie key={i} link={savedMovie.movieLink} title={savedMovie.title} movie={savedMovie}  />
		})

		return (
			<div className="modal">
				<Modal style={customStyle} isOpen={this.props.show}  onRequestClose={this.props._close} contentLabel="Modal">
					<h2>Favorite List</h2>			
					{savedMovies}						
				</Modal>
			</div>
		)
    }
})

module.exports = ReuseModal;
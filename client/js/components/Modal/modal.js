var React = require('react');
var Modal = require('react-modal');
var MovieList = require('./movie-list');

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

		  	content : {
			    position : 'absolute',
			    top : '20%',
			    left : '70%',
			    right : '5%',
			    bottom : '30%',
			    border : '5px solid #ccc',
			    background : '#18222a',
			    overflow : 'auto',
			    WebkitOverflowScrolling : 'touch',
			    borderRadius : '4px',
			    outline : 'none',
		 	}
		}

		var savedMovies = this.props.movieList;
		for(var i = 0 ; i < savedMovies.length; i++) {
			console.log(savedMovies[i])
		}
		console.log(savedMovies.length)

		return (
			//onRequestClose={false}
			<div>
				<Modal style={customStyle} isOpen={this.props.show}  onRequestClose={this.props._close} contentLabel="Modal">
							<h1>Modal Content</h1>
							<p>Etc.</p>
							<MovieList movieList={this.props.movieList}/>
						
				</Modal>
			</div>
		)
    }
})

module.exports = ReuseModal;
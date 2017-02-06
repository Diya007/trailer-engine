var React = require('react');
var Modal = require('react-modal');
var MovieList = require('./movie-list');

var ReuseModal = React.createClass({

	render: function() {
    var movieList = this.props.movieList;

    var customStyle={
    	overlay: {
    		position  : 'fixed',
		    backgroundColor : 'rgba(255, 255, 255, 0)',
		    zIndex :'1000'
    	},

	  	content : {
		    position : 'absolute',
		    top : '40px',
		    left : '500px',
		    right : '40px',
		    bottom : '80px',
		    border : '1px solid #ccc',
		    background : 'gray',
		    overflow : 'auto',
		    WebkitOverflowScrolling : 'touch',
		    borderRadius : '4px',
		    outline : 'none',
	 	}
	}
		return (
			<div>
				<Modal style={customStyle} isOpen={this.props.show} onRequestClose={this.closeModal} contentLabel="Modal">
							<h1>Modal Content</h1>
							<p>Etc.</p>
							<MovieList movieList={this.props.movieList} />
							<button onClick={this.props.closeModal}>close</button>
				</Modal>
			</div>
		)
    }
})

module.exports = ReuseModal;
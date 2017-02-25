var React = require('react');
var MovieList = require('../Modal/movie-list');
var ReuseModal = require('../Modal/modal')

var Profile = React.createClass({
	getInitialState: function() {
		return {show: false}
	},

	_closeModal: function() {
		this.setState({show: false})
	},
	
	_openModal: function() {
		this.setState({show: true})
	},
	render: function() {
		var movieList = this.props.movieList;
		//{this.state.show ? <MovieList movieList={movieList} /> : null}
		return (
			<div className="profile"> 
				<button type="button" onClick={this._openModal}> {this.props.profileName} </button> 
				<ReuseModal show={this.state.show} _close={this._closeModal} movieList={movieList} />
		    </div>
		)
	}
})


module.exports = Profile;
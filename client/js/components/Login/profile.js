var React = require('react');
var MovieList = require('../Modal/movie-list');
var ReuseModal = require('../Modal/modal')

var Profile = React.createClass({
	_closeModal: function() {
		this.setState({show: false})
		//console.log('button works')

	},

	getInitialState: function() {
		return {show: false}
	},

	_openModal: function() {
		this.setState({show: true})
	},
	// _closeModal: function() {
	// 	this.setState({show: false})
	// },

	render: function() {
		console.log(this.props.profileName)

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

//你要改的是这个ResueModal 的state, 当click close button时， change ReuseModal的state to false

//<Modal id="modal" style={customStyle} isOpen={this.state.show} contentLabel="Modal"></Modal>


module.exports = Profile;
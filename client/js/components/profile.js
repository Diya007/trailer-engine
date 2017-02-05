var React = require('react');
var MovieList = require('./movie-list');

var ReuseModal = require('./modal')

var Profile = React.createClass({
	getInitialState: function() {
		return {show: false}
	},

	_openModal: function() {
		this.setState({show: true})
	},

	render: function() {

		var movieList = this.props.movieList;
		//{this.state.show ? <MovieList movieList={movieList} /> : null}
		console.log(this.props.profileName)
		// console.log(this.props.movieList)
		return (
			<div className="profile"> 
				<button type="button" onClick={this._openModal}> {this.props.profileName} </button> 

				<ReuseModal show={this.state.show}  movieList={movieList} />
		    </div>
		)
	}
})


//<Modal id="modal" style={customStyle} isOpen={this.state.show} contentLabel="Modal"></Modal>


module.exports = Profile;
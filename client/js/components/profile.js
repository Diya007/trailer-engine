var React = require('react');
var MovieList = require('./movie-list');
import { Tooltip, OverlayTrigger, ButtonToolbar, DropdownButton, MenuItem} from 'react-bootstrap';

var Profile = React.createClass({
	getInitialState: function() {
		return {show: false}
	},

	retrieveMovieList: function() {
		this.setState({show: true})
	},

	render: function() {
		var movieList = this.props.movieList;
		//{this.state.show ? <MovieList movieList={movieList} /> : null}
		// console.log(this.props.profileName)
		// console.log(this.props.movieList)
		return (
			<div className="profile"> 

				<DropdownButton type="button" onClick={this.retrieveMovieList} title={this.props.profileName} id="profileButton">
					<MenuItem eventKey="1"> <MovieList movieList={movieList} /> </MenuItem>
					
				</DropdownButton>
				
		    </div>
		)
	}
})

module.exports = Profile;
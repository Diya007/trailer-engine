var React = require('react');
var MovieList = require('./movie-list');
// var ReactBootstrap = require('react-bootstrap');
// var Modal = ReactBootstrap.Modal;
//import { Tooltip, OverlayTrigger, ButtonToolbar, DropdownButton, MenuItem} from 'react-bootstrap';
//var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
var Modal = require('react-modal');
var Profile = React.createClass({




	getInitialState: function() {
		return {show: false}
	},

	_openModal: function() {
		this.setState({show: true})
	},

	render: function() {

	var customStyle={
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(255, 255, 255, 0.75)'
  },
  content : {
    position                   : 'absolute',
    top                        : '40px',
    left                       : '40px',
    right                      : '40px',
    bottom                     : '40px',
    border                     : '1px solid #ccc',
    background                 : 'red',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '4px',
    outline                    : 'none',
    padding                    : '20px'
 
  }
}


		var movieList = this.props.movieList;
		//{this.state.show ? <MovieList movieList={movieList} /> : null}
		console.log(this.props.profileName)
		// console.log(this.props.movieList)
		return (
			<div className="profile"> 
				<button type="button" onClick={this._openModal}> {this.props.profileName} </button> 
			<Modal style={customStyle}
  isOpen={this.state.show}
  
  
  contentLabel="Modal"
>
  <h1>Modal Content</h1>
  <p>Etc.</p>
</Modal>
        

		    </div>
		)
	}
})




module.exports = Profile;
var React = require('react');
var FaTrash = require('react-icons/lib/fa/trash');
var connect = require('react-redux').connect;
var actions = require('../../actions/index');

// this is where queue format is 

var Movie = React.createClass({
	getMovie: function() {
		window.open(this.props.link,"popup","width=700,height=450");
	},
	deleteList: function() {
		var movieId = this.props.movie._id
		alert("delet works")
		console.log(this.props.movie._id)
		this.props.dispatch(actions.deleteMovie(movieId));
	},
	render: function() {
		return(
			<div className="Movie">
				<div className="col-sm-6">
					<div className="savedTitle" onClick={this.getMovie}> {this.props.title} </div>
				    <div className="deleteList" onClick={this.deleteList}><FaTrash size={22} /></div>
				</div>
			</div>
		)		
	}
})

var Container = connect()(Movie);
module.exports = Container;
var ReuseModal = React.createClass({
	render: function() {

    var customStyle={
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
		    padding  : '20px'
	 	}
	}

		return (
			<div>
				<Modal style={customStyle} isOpen={this.props.show} contentLabel="Modal">
							<h1>Modal Content</h1>
							<p>Etc.</p>
				</Modal>
			</div>
		)

    }
})
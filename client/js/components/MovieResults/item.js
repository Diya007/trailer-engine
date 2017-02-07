var React = require('react');
var ListToggle = require('./list-toggle');
var Iframe = require("react-iframe");

var Item = React.createClass({
  getInitialState: function() {
    return{show: false}
  },
  getMovie: function() {
    //window.open(this.props.videoId,"popup","width=700,height=450");
    //var movieTitle = this.props.title;  
    console.log(this.props.item);
    this.setState({show: true})
  }, 
  // iframe: function () {
  //     return {
  //         __html: this.props.iframe
  //     }
  // },

  render: function() {
    return (	
      <div className="Item" style={{backgroundImage: 'url(' + this.props.backdrop + ')'}} >
        <div className="overlay">
          <div className="title">{this.props.title}</div> 
          <button onClick={this.getMovie}  id="getMovies" type="button" >
            Play
          </button>
          <ListToggle movieTitle={this.props.title} videoId={this.props.videoId} movieItem={this.props.item} />  

          {this.state.show ? <Iframe url={this.props.videoId + "&output=embed"} height={'50%'} width={'50%'} /> : null} 

        </div>
      </div>
    );
  }
});


module.exports = Item;

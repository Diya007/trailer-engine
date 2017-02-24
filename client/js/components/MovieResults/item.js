var React = require('react');
var ListToggle = require('./list-toggle');
var Iframe = require("react-iframe");
var YoutubePlay = require('react-icons/lib/fa/youtube-play');

var Item = React.createClass({
  getInitialState: function() {
    return{show: false}
  },
  getMovie: function() {
    window.open('<iframe width="560" height="315" src="https://www.youtube.com/embed/tayEofaRQIs" frameborder="0" allowfullscreen></iframe>',"popup","width=700,height=450");

    var movieTitle = this.props.title;  
    console.log(this.props.item);
    this.setState({show: true})
  }, 
  render: function() {
    return (	
      <div className="Item" style={{backgroundImage: 'url(' + this.props.backdrop + ')'}} >
        <div className="overlay">
          <div className="title">{this.props.title}</div> 
          {/*<button onClick={this.getMovie}  id="getMovies" type="button" >
            Play
          </button>*/}
          
          <div className="play-trailer" id="getMovies" onClick={this.getMovie} ><YoutubePlay size={40} /></div>
          <div className="tooltiptext">click to play</div>
          <ListToggle movieTitle={this.props.title} videoId={this.props.videoId} movieItem={this.props.item} />      
        </div>
      </div>
    );
  }
});

//{this.state.show ? <Iframe url={this.props.videoId + "&output=embed"} height={'50%'} width={'50%'} /> : null} 
module.exports = Item;

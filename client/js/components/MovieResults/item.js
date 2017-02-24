var React = require('react');
var ListToggle = require('./list-toggle');
var ReactPlayer = require('react-player');
var YoutubePlay = require('react-icons/lib/fa/youtube-play');
var PlayVideo = require('./videoEmbed')

var Item = React.createClass({
  getInitialState: function() {
    return{show: false}
  },
  getMovie: function() {
    
    var movieTitle = this.props.title;  
    console.log(this.props.item);
    this.setState({show: true})
  }, 
  render: function() {
    return (
       
      <div className="Item" style={{backgroundImage: 'url(' + this.props.backdrop + ')'}} >

      {this.state.show ? <PlayVideo url={this.props.videoId} /> : null}

        <div className="overlay">
          <div className="title">{this.props.title}</div>      
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

var React = require('react');
var connect = require('react-redux').connect;
var actions = require('../actions/index');
// var Item = require('./item');
// todo add folder called components/utils  index.js store fetch functions in it
// require fetch items function from utils
// store state only for search results 
var TitleList = React.createClass({
  componentDidMount: function(){
    this.props.dispatch(actions.fetchResults(this.props.term))  },

  render: function() {   
  
   //this.props.dispatch(actions.fetchResults('harry potter'))

   //console.log(this.props.items);
    var imgs = this.props.items.map(function(item, i) {
        if(i<5) {
          var backDrop = item.snippet.thumbnails.high.url;
          var videoId = 'https://www.youtube.com/watch?v='+item.id.videoId;
          var name = item.snippet.title;
          var overview = item.snippet.description;
          //console.log(item.etag)
          return   <Item  key = {item.etag}  title={name} overview={overview} backdrop={backDrop} videoId={videoId} /> 
          
        };
    })
    
    return(
      <div ref="titlecategory" className="TitleList" >
        <div className="Title">
          <h2>{this.props.title}</h2>
         
          <div className="titles-wrapper">
            {imgs}
          </div>
        </div>
      </div>
    )  
   
  }
});


var Item = React.createClass({
  getMovies: function() {
    window.open(this.props.videoId,"popup","width=700,height=450");
  }, 

  render: function() {
    return (
      <div className="Item" style={{backgroundImage: 'url(' + this.props.backdrop + ')'}} >
        <div className="overlay">
          <div className="title">{this.props.title}</div> 
          <button onClick={this.getMovies} id="getMovies" type="button" >
            Play
          </button>
        </div>
      </div>
    );
  }
});


function mapStateToProps(state) {
  return {
    items: state.items,
  }
}
var Container = connect(mapStateToProps)(TitleList);


module.exports = Container;
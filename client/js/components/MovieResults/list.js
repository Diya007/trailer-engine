var React = require('react');
var connect = require('react-redux').connect;
//var actions = require('../actions/index');
var Item = require('./item');

var TitleList = React.createClass({

  render: function() {

    var imgs = this.props.items.map(function(item, i) {
        if(i<5) {
          var backDrop = item.snippet.thumbnails.high.url;
          var videoId = 'https://www.youtube.com/watch?v='+item.id.videoId;
          var name = item.snippet.title;
          var overview = item.snippet.description;
          var item = item;
         return   <Item  item={item} key={item.etag}  title={name} overview={overview} backdrop={backDrop} videoId={videoId} />          
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


module.exports = TitleList;
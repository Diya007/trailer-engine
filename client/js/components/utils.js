// todo add folder called components/utils  index.js store fetch functions in it
// require fetch items function from utils
// store state only for search results 

getInitialState: function() {
    return {items:[], mounted:false};
  },
  loadContent: function() {
    var apiKey = 'AIzaSyBlpPh_6snu64y_Q2O7OAubiS2DSM1hWZY';
    var url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&q='+this.props.term+'trailer&key='+apiKey;
    fetch(url).then(function(response) {
      if(response.status <200 || response.status >=300) {
        var error = new Error(response.statusText);
        error.response = response;
        throw error;
      }
    })
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      var items = data.items;
      this.setState({items:items})
    })
    .catch(function(err) {
      console.log('catch error',err);
    })

  },
  componentWillReceiveProps:function(nextProps){
    if(nextProps.term != this.props.term && nextProps.term !='') {
      this.setState({mounted:true, term:nextProps.term}, function(){
        this.loadContent();
      });
    }
  },
  componentDidMount: function(){
    if(this.props.term !=""){
      this.loadContent();
      this.setState({mounted:true});
    }
  },

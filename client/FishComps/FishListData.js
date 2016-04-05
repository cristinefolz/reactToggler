/* Fish App
      FishBox
          FishListData
              FishList
                  FishCard
          FishFormData
              FishForm
          FishDetailsData
              FishDetails
          EditFishData
              EditFishForm
*/

var React = require('react');
var Loader = require('./FishLoader');
var FishList = require('./FishList');

var FishListData = React.createClass ({

  getInitialState() {
    return {
      allFish: null
    }
  },

  contextTypes: {
      sendNotification: React.PropTypes.func.isRequired
  },

  deleteFish: function(id){
    console.log(id)

    var self = this;

    if( confirm('Are you sure you want to delete this fish?') ){
      $.ajax({
        url: '/api/fish/one_fish/' + id,
        method: 'DELETE'
      }).done(function(){
        self.context.sendNotification("Deleted Fish!!!!");
        self.loadAllFishFromServer();
      });
    }
  },

  loadAllFishFromServer() {
    //GO GET ALL FISH FROM SERVER
    $.ajax({
      url: '/api/fish',
      method: 'GET'
    }).done((data) => this.setState({ allFish: data }));
  },


  componentDidMount() {
    this.loadAllFishFromServer();
  },

  render() {
    return this.state.allFish ? <FishList fishArray={ this.state.allFish } getId={ this.props.getId } deleteFish={ this.deleteFish }/> : <Loader/>
  },
});

module.exports = FishListData;
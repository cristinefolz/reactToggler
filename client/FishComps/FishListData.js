/* Fish App
      FishBox
          FishListData
              FishList
                  FishCard
          FishFormData
              FishForm
          FishDetailsData
              FishDetails
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

  deleteId: function(id){

    $.ajax({
      url: '/api/fish/one_fish/' + id,
      method: 'DELETE',
      success: function(fish){
        if(confirm('Are you sure you want to delete this fish?')){
          this.loadAllFishFromServer();
        }
      }.bind(this),
    });
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
    return this.state.allFish ? <FishList fishArray={ this.state.allFish } getId={ this.props.getId } deleteId={ this.deleteId }/> : <Loader/>
  },
});

module.exports = FishListData;
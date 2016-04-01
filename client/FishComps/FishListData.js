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
    return this.state.allFish ? <FishList fishArray={ this.state.allFish } getId={ this.props.getId }/> : <Loader/>
  },
});

module.exports = FishListData;
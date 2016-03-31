// Fish
  // Jumbotron
  // Toggle Fish
  // Display Fish
  // Edit Fish

var React = require('react');
var FishBox = require('./FishComps/FishBox');
var Loader = require('./FishComps/FishLoader');
var FishJumbotron = require('./FishComps/FishJumbo');

var FishApp = React.createClass({

  submitFishToServer: function(fishData) {
    console.log("fish data in fish app", fishData)

    $.ajax({
      url:'/api/fish',
      dataType: 'json',
      method: 'POST',
      data: fishData,
      success: function(fish){
        console.log(fish, 'fish record is posted');
        this.loadAllFishFromServer();
      }.bind(this),
      error: function(xhr, status, err){
        console.error('/api/fish', status, err.toString());
      }.bind(this)
    });
  },

  render: function() {
      return (
        <div>
          <FishJumbotron />
          <FishBox submitFishToServer={ this.submitFishToServer } />
        </div>
        )
  }
});

module.exports = FishApp;
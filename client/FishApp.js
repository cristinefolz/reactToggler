// Fish
  // Jumbotron
  // Toggle Fish
  // Display Fish
  // Edit Fish

var React = require('react');
var FishBox = require('./FishComps/FishBox');

var Jumbotron = React.createClass({
  render: function() {
    return (
      <div className="jumbotron">
        <h1 className="display-3">Do you know about fish?</h1>
        <p className="lead">Fish are Fascinating...</p>
        <hr className="m-y-2"/>
      </div>
      )
  }
});


var Loader = React.createClass({
  render: function(){
    return (
      <div>
        <i className="fa fa-spinner fa-6 fa-spin myFont center-block"></i>
      </div>
      )
  }
});

var FishApp = React.createClass({
  getInitialState: function() {
    return {
      fishArray: null
    }
  },

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

  loadAllFishFromServer: function() {
    //GO GET ALL FISH FROM SERVER
    var self = this;
    $.ajax({
      url: '/api/fish',
      method: 'GET'
    }).done(function(data){
      //UPDATE FISH STATE WITH DATA
      setTimeout(function(){
        self.setState({fishArray: data})
      }, 1000);
    })
  },
  componentDidMount: function() {
    this.loadAllFishFromServer();
  },
  render: function() {
    if(this.state.fishArray) {
      return (
        <div>
          <Jumbotron />
          <FishBox submitFishToServer={ this.submitFishToServer } fishArray={ this.state.fishArray } />
        </div>
        )
    } else {
      return <Loader/>
    }
  }
});

module.exports = FishApp;
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
          <h1 className="display-3">Trolling</h1>
          <p className="lead">Fish Hooks</p>
          <hr className="m-y-2"/>
          <p></p>
          <p className="lead">
            <a className="btn btn-primary btn-lg" href="" role="button">FISH Button</a>
          </p>
        </div>

      )
  }
});

var Toggler = React.createClass({
  render: function() {
    return (
        <div className="btn-group" data-toggle="buttons">
          <label className="btn btn-primary active">
            <input type="radio"/> 
            Fish Display
          </label>
          <label className="btn btn-primary">
            <input type="radio"/> 
            Modify Fish
          </label>
        </div>
      )
  }
});

var Loader = React.createClass({
  render: function() {
    return (
      <div>
       <i className="fa-spin fa fa-spinner fa-6 mySpinner"></i>
     </div>
    )
  }
});


var FishApp = React.createClass({

  getInitialState: function(){
    return {
      fishArray: null
      }
  },

  loadAllFishFromServer: function(){
    var self = this;
    $.ajax({
      url: '/api/fish',
      method: 'GET'
    }).done(function(data){
      console.log(data);
      setTimeout(function() {
        self.setState({ fishArray: data })
        }, 1000);    
    })
  },

  componentDidMount: function() {
    this.loadAllFishFromServer();
  },


  render: function(){ 
    if (this.state.fishArray){
    return (
      <div>
          <Jumbotron />
          <Toggler />
          <FishBox fishArray={ this.state.fishArray }/>
      </div> 
      )
    } else {
    return <Loader />
    }
  }
});

module.exports = FishApp;
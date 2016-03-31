var React = require('react');
var FishList = require('./FishList');
var FishForm = require('./FishForm');
// FishBox
//  Toggler
//  FishList
//    FishCard
//  FishForm

var Toggler = React.createClass({
  render: function() {
    return (
      <div className="container">
        <div data-toggle="buttons">
            <button className="btn btn-primary-outline my-btn" 
              onClick={() => this.props.toggleActiveComp('fish')}> Fish Display </button>

            <button className="btn btn-primary-outline my-btn" 
              onClick={() => this.props.toggleActiveComp('form')}> Add Fish to Display </button>
        </div>
      </div>
      )
  }
});

var FishBox = React.createClass({
  getInitialState: function() {
    return {
      activeComponent: 'fish'
      }
  },
  showComp: function() {
    /* THIS FUNCTION RENDERS ONE COMPONENT 
    BASED ON activeComp State*/
    if(this.state.activeComponent === 'fish'){
      return <FishList fishArray={ this.props.fishArray }/>
    } else if (this.state.activeComponent === 'form') {
      return <FishForm submitFishToServer={ this.props.submitFishToServer }/>
    } else {
      return <FishList fishArray={ this.props.fishArray }/>
    }
  },
  toggleActiveComp: function(name) {
    this.setState({activeComponent: name})
  },
  render: function() {
    return (
      <div className="container myContainer">
        <Toggler toggleActiveComp={ this.toggleActiveComp }/>
        { this.showComp() }
      </div>     
      )
  }
});

module.exports = FishBox;
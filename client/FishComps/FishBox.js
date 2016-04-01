var React = require('react');

var FishForm = require('./FishForm');
var FishListData = require('./FishListData');

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
      return <FishListData/>
    } else if (this.state.activeComponent === 'form') {
      return <FishForm submitFishToServer={ this.props.submitFishToServer }/>
    } else {
      throw new Error("Invalid activeComponent ", this.stat.activeComponent)
    }
  },
  toggleActiveComp: function(name) {
    this.setState({activeComponent: name})
  },
  render: function() {
    return (
      <div className="container fbContainer">
      <Toggler toggleActiveComp={this.toggleActiveComp}/>
      { this.showComp() }
      </div>    
    )
  }
});

module.exports = FishBox;
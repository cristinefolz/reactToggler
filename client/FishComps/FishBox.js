// FishBox
  // FishList
    // FishCard

var React = require('react');
var FishList = require('./FishList');

var FishBox = React.createClass({
  render: function() {
    console.log(this.props.fishArray, "Found the Fishes!!")
    return (
        <div>
         <FishList fishArray={ this.props.fishArray } />
        </div>
      )
  }
});

module.exports = FishBox;
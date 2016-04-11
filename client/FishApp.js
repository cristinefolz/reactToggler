/* Fish App
      FishBox
          FishData
              FishList
                  FishCard
          FishFormData
              FishForm
*/

var React = require('react');
var FishBox = require('./FishComps/FishBox');
var FishJumbotron = require('./FishComps/FishJumbo');

var FishApp = React.createClass({

  render: function() {
      return (
        <div>
          <FishJumbotron />
          <FishBox />
        </div>
        )
  }
});

module.exports = FishApp;
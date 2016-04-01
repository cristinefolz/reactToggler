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


var FishToggler = React.createClass({
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

module.exports = FishToggler;
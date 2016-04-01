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

var Loader = React.createClass({
  render: function(){
    return (
      <div>
        <i className="fa fa-spinner fa-6 fa-spin myFont center-block"></i>
      </div>
      )
  }
});

module.exports = Loader;
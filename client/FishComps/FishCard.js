// FishBox
  // FishList
    // FishCard


var React = require('react');


var FishCard = React.createClass({
  render: function() {
    return (
        <div className="card col-sm-4">
          <img className="card-img-top img" src={ this.props.img } alt="Card image cap"/>
          <div className="card-block">
            <h4 className="card-title">{ this.props.name }</h4>
            <p className="card-text">Fish Data</p>
          </div>
        </div>

    )
  }
});
 
module.exports = FishCard;
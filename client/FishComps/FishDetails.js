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

function FishDetails(props) {
  console.log(props);
  return (
      <div className="container">
      <br/>

          <div className="card">
            <img className="card-img-top fish-img" src={ props.oneFish.img } alt="some fish"/>
              <div className="card-block">
              <h4 className="card-title">{ props.oneFish.name }</h4>
              <p className="card-text">{ props.oneFish.color }</p>
              <p className="card-text">{ props.oneFish.length }</p>
              <p className="card-text">Will I eat people? { (props.oneFish.people_eater).toString() }</p>
              <button onClick={ props.updateFishOnServer } className="btn btn-warning"> Update </button>
              </div>
          </div>

      </div>
    )
};

module.exports = FishDetails;
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

function FishCard(props){
    return (
      <div className="col-sm-4">
      <br/>

          <div className="card">
            <img className="card-img-top fish-img" src={ props.img } alt="some fish"/>
              <div className="card-block">
              <h4 className="card-title">{ props.name }</h4>
              <button onClick={ props.getId.bind(null, props.id) } className="btn btn-primary"> More Info...</button>
              <button onClick={ props.deleteFish.bind(null, props.id) } className="btn btn-del btn-warning"> Delete </button>
              </div>
          </div>

      </div>
      )
};

module.exports = FishCard;
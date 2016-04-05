/* Fish App
      FishBox
          FishListData
              FishList
                  FishCard
          FishFormData
              FishForm
          FishDetailsData
              FishDetails
          EditFishData
              EditFishForm
*/

var React = require('react');

function EditFishForm(props){
    return (
      <div className="container">
      <form className="col-sm-6" onSubmit={ props.handleFormSubmit }>
        <legend> Update Fish Info! </legend>

            <fieldset className="form-group">
              <label >Name</label>
              <input onChange={ props.handleNameChange } value={ props.name } className="form-control" placeholder="Species Name"/>
            </fieldset>

            <fieldset className="form-group">
              <label >Color</label>
              <input onChange={ props.handleColorChange } value={ props.color } className="form-control" placeholder="Species Name"/>
            </fieldset>

            <fieldset className="form-group">
              <label >Image</label>
              <input onChange={ props.handleImgChange } value={ props.img } className="form-control" placeholder="Species Name"/>
            </fieldset>

            <fieldset className="form-group">
              <label >Length</label>
              <input onChange={ props.handleLengthChange } value={ props.length } className="form-control" placeholder="Species Name"/>
            </fieldset>

            <fieldset className="form-group">
              <label htmlFor="exampleSelect1">People Eater?</label>
              <select onChange={ props.handlePeopleEaterChange } className="form-control">
                <option disabled selected value>{ props.people_eater.toString() }</option>
                <option value={ true }>yes</option>
                <option value={ false }>no</option>
              </select>
            </fieldset>


            <button className="btn btn-primary" type="submit"> Submit Changes </button>
      </form>
      </div>
      )
};

module.exports = EditFishForm;
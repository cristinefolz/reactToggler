/* Fish App
      FishBox
          FishData
              FishList
                  FishCard
          FishFormData
              FishForm
*/

var React = require('react');

function FishForm(props){
    return (
      <div className="container">
      <form className="col-sm-6" onSubmit={ props.handleFormSubmit }>
        <legend> Add New Fish! </legend>

            <fieldset className="form-group">
              <label for="formGroupExampleInput">Name</label>
              <input onChange={ props.handleNameChange } value={ props.name } type="text" className="form-control"
                id="formGroupExampleInput" placeholder="Species Name"/>
            </fieldset>

            <fieldset className="form-group">
              <label for="formGroupExampleInput2">Color</label>
              <input onChange={ props.handleColorChange } value={ props.color } type="text" className="form-control"
                id="formGroupExampleInput2" placeholder="Primary Color"/>
            </fieldset>

            <fieldset className="form-group">
              <label for="formGroupExampleInput2">Length</label>
              <input onChange={ props.handleLengthChange } value={ props.length } type="text" className="form-control"
                id="formGroupExampleInput2" placeholder="Length in feet and inches"/>
            </fieldset>

            <fieldset className="form-group">
              <label for="formGroupExampleInput2">Image Source</label>
              <input onChange={ props.handleImgChange } value={ props.img } type="text" className="form-control"
                id="formGroupExampleInput2" placeholder="http://example.com"/>
            </fieldset>

            <fieldset className="form-group">
              <label htmlFor="exampleSelect1">People Eater?</label>
              <select onChange={ props.handlePeopleEaterChange } className="form-control">
                <option>Yes or No</option>
                <option value={ true }>yes</option>
                <option value={ false }>no</option>
              </select>
            </fieldset>

            <button className="btn btn-primary" type="submit"> Submit </button>
      </form>
      </div>
      )
};

module.exports = FishForm;
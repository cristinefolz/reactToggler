var React = require('react');

var FishForm = React.createClass({
  getInitialState: function() {
    return {
      name: null,
      peopleEater: null,
      color: null,
      img: null,
      length: null,
    }
  },
  onNameChange: function(event){
    this.setState({ name: event.target.value })
  },
  onColorChange: function(event){
    this.setState({ color: event.target.value })
  },
  onImgChange: function(event){
    this.setState({ img: event.target.value })
  },
  onLengthChange: function(event){
    this.setState({ length: event.target.value })
  },
  peopleEaterChange: function(event){
    console.log(event.target.value);
    this.setState({ peopleEater: event.target.value })
  },
  handleFormSubmit: function(e) {
    e.preventDefault();

    var fishData = {
      name: this.state.name.trim(),
      color: this.state.color.trim(),
      length: this.state.length.trim(),
      img: this.state.img.trim(),
      people_eater: this.state.peopleEater
    };

    this.props.submitFishToServer(fishData);

    this.setState({ name: '', color: '', length: '', img: '' });
  },
  render: function() {
    return (
      <div>
      <form onSubmit={ this.handleFormSubmit }>
        <h3> Enter New Fish </h3>
        <fieldset className="form-group">
          <label>name</label>
          <input onChange={this.onNameChange} value={ this.state.name } type="text" className="form-control"/>
        </fieldset>
        <fieldset className="form-group">
          <label>color</label>
          <input onChange={this.onColorChange} value={ this.state.color } type="text" className="form-control"/>
        </fieldset>
        <fieldset className="form-group">
          <label>length</label>
          <input onChange={this.onLengthChange} value={ this.state.length } type="text" className="form-control"/>
        </fieldset>
        <fieldset className="form-group">
          <label>img src</label>
          <input onChange={this.onImgChange} value={ this.state.img } type="text" className="form-control"/>
        </fieldset>

        <fieldset className="form-group">
          <label htmlFor="exampleSelect1">Man Eater?</label>
          <select onChange={ this.peopleEaterChange } className="form-control">
            <option>-</option>
            <option value={ true }>yes</option>
            <option value={ false }>no</option>
          </select>
        </fieldset>

        <button className="btn btn-success-outline" type="submit"> Submit </button>
      </form>
      </div>
      )
  }
});

module.exports = FishForm;
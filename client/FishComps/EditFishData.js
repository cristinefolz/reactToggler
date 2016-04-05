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

// ajax get to get the one fish
// pass that state into form
// use form to show the data
// render the form who's intitial input fields have the one fish's data

var React = require('react');
var EditFishForm = require('./EditFishForm');

var EditFishData = React.createClass({

  getInitialState: function(){
      return {
        name: null,
        color: null,
        people_eater: Boolean,
        length: null,
        img: null 
      }
  }, 

  contextTypes: {
      sendNotification: React.PropTypes.func.isRequired
    },

  loadOneFishFromServer: function() {
    var self = this;
    $.ajax({
      url: '/api/fish/one_fish/' + this.props.id,
      method: 'GET',
    }).done(function(data){
      self.setState({
        name: data.name,
        color: data.color,
        people_eater: data.people_eater,
        length: data.length,
        img: data.img
      })
    })
  },

  componentDidMount: function() {
    this.loadOneFishFromServer()
  },

  handleNameChange: function(event){
    this.setState({ name: event.target.value })
  },

  handleColorChange: function(event){
      this.setState({ color: event.target.value })
  },

  handleImgChange: function(event){
      this.setState({ img: event.target.value })
  },

  handleLengthChange: function(event){
      this.setState({ length: event.target.value })
  },

  handlePeopleEaterChange: function(event){
      console.log(event.target.value);
      this.setState({ people_eater: event.target.value })
  },

  handleFormSubmit: function(e) {
      e.preventDefault();

      var fishData = {
        name: this.state.name.trim(),
        color: this.state.color.trim(),
        length: this.state.length.trim(),
        img: this.state.img.trim(),
        people_eater: this.state.people_eater
      };

      console.log(fishData);
      this.submitFishToServer(fishData);
      this.setState({ name: '', color: '', length: '', img: '' });

      alert('Yay! You have updated the Fish!');
  },

  submitFishToServer: function(fishData){

    $.ajax({
      url: '/api/fish/one_fish/' + this.props.id,
      dataType: 'json',
      type: 'PUT',
      data: fishData,
      success: function(data){
        this.props.toggleActiveComp('fish');
        this.context.sendNotification('Updated the ' + data.name + '!');
        console.log(data);
      }.bind(this),
      error: function(xhr, status, err){
        console.log('/api/fish/one_fish/', status, err.toString())
      }.bind(this)
    })
  },


  render: function() {
    return this.state.name ? <EditFishForm { ...this.state } handleNameChange={ this.handleNameChange } handleColorChange={ this.handleColorChange } handleImgChange={ this.handleImgChange } handleLengthChange={ this.handleLengthChange } handlePeopleEaterChange={ this.handlePeopleEaterChange } handleFormSubmit={ this.handleFormSubmit }/> : null;
  }
});

module.exports = EditFishData;
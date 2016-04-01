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
var FishForm = require('./FishForm');

var FishFormData = React.createClass({

    propTypes: { toggleActiveComp: React.PropTypes.func.isRequired },

    getInitialState: function(){
      return {
        name: null,
        color: null,
        people_eater: null,
        length: null,
        img: null
      }
    },

    contextTypes: {
      sendNotification: React.PropTypes.func.isRequired
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

      console.log(fishData);

      if(!fishData.name && !fishData.color){
        return;
      } else {
        this.submitFishToServer(fishData);
        this.setState({ name: '', color: '', length: '', img: '' });

        alert('Yay! You have added a new Fish to the Pool!');
      }
    },

    submitFishToServer: function(fishData){

      $.ajax({
        url: '/api/fish',
        dataType: 'json',
        type: 'POST',
        data: fishData,
        success: function(data){
          this.props.toggleActiveComp('fish');
          this.context.sendNotification('Added Fish!!!!');
          console.log(data);
        }.bind(this),
        error: function(xhr, status, err){
          console.log('/api/fish', status, err.toString())
        }.bind(this)
      })
    },

    render: function(){
      return (

        <div>
          <FishForm 
            name={ this.state.name }
            handleFormSubmit={ this.handleFormSubmit } 
            handleNameChange={ this.handleNameChange }
            handleColorChange={ this.handleColorChange } 
            handleImgChange={ this.handleImgChange }
            handleLengthChange={ this.handleLengthChange } 
            handlePeopleEaterChange={ this.handlePeopleEaterChange }
           />
        </div>

      )
    }

});

module.exports = FishFormData;


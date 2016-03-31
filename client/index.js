var React = require('react');
var ReactDom = require('react-dom');
var NavBar = require('./NavBar');
var Footer = require('./Footer');
var Welcome = require('./Welcome');
var Cookies = require('./Cookies');
var FishApp = require('./FishApp');
var Bears = require('./Bears');
var Beers = require('./Beers');

require('./stylesheets/main.scss')

var App = React.createClass({

  getInitialState: function(){
    return {
      activeComponent: 'welcome'
    }
  },

  setActiveComponent: function(componentName){
    console.log('Found Comp: ', componentName);
    this.setState({
      activeComponent: componentName
    })
  },

  showWhichComponent: function(){
    switch(this.state.activeComponent) {
      case 'welcome':
          return <Welcome/>
          break;
      case 'cookies':
          return <Cookies/>
          break;
      case 'fish':
          return <FishApp/>
          break;
      case 'bears':
          return <Bears/>
          break;
      case 'beer':
          return <Beers/>
          break;
      default:
          return <Welcome/>
    };
  },

  render: function() {
    return (
      <div>

        <NavBar setActiveComponent={ this.setActiveComponent }/>
          <div>
          { this.showWhichComponent() }
          </div>
        <Footer />  

      </div>
      )
  }
});

React.render(
  <App />, document.getElementById('app')
);

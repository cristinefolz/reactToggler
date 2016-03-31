var React = require('react');

var Welcome = React.createClass ({
  render: function (){
    return (
      <div>
        <div className="jumbotron">
          <h1 className="display-3">Welcome to ToggleLand!</h1>
            <p className="lead">This is a react-toggle exercise.</p>
            <hr className="m-y-2"></hr>
            <p>We will use parts of this in our next project.</p>
            <p className="lead">
              <a className="btn btn-primary btn-lg" href="#" role="button">Click for giggles...</a>
          </p>
        </div>

      </div> 
      )
  }
});

module.exports = Welcome;
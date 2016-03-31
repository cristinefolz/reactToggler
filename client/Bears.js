var React = require('react');

var Bears = React.createClass ({
  render: function (){
    return (
      <div>
        <div className="jumbotron">
          <h1 className="display-3">Watch out for the Bears!</h1>
            <p className="lead">I saw a Grizzly on campus the other day...</p>
            <hr className="m-y-2"></hr>
            <p>We will use parts of this in our next project.</p>
            <p className="lead">
              <a className="btn btn-primary btn-lg" href="#" role="button">Click to run...</a>
          </p>
        </div>

      </div> 
      )
  }
});

module.exports = Bears;
var React = require('react');

var Beers = React.createClass ({
  render: function (){
    return (
      <div>
        <div className="jumbotron">
          <h1 className="display-3">I am soooo thirsty.....</h1>
            <p className="lead">Red Beer Rules on the River!</p>
            <hr className="m-y-2"></hr>
            <p>We will use parts of this in our next project.</p>
            <p className="lead">
              <a className="btn btn-primary btn-lg" href="#" role="button">Drink to Click...</a>
          </p>
        </div>

      </div> 
      )
  }
});

module.exports = Beers;
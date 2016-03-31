var React = require('react');

var Cookies = React.createClass ({
  render: function (){
    return (
      <div>
        <div className="jumbotron">
          <h1 className="display-3">My Favorite Cookies!</h1>
            <p className="lead">Girl Scout Samoas are pretty tasty...</p>
            <hr className="m-y-2"></hr>
            <p>We will use parts of this in our next project.</p>
            <p className="lead">
              <a className="btn btn-primary btn-lg" href="#" role="button">Click for calories...</a>
          </p>
        </div>

      </div> 
      )
  }
});

module.exports = Cookies;
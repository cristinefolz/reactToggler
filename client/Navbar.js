var React = require('react');

var links = ['Welcome', 'Cookies', 'Fish', 'Bears', 'Beer'];

var NavBar = React.createClass ({
  
  render: function (){
    var self = this;
    var link = links.map(function(item){
    return (
        <li className="nav-item" key={ item }>
          <a className="nav-link" onClick={ self.props.setActiveComponent.bind(null, item) }>{ item }</a>
        </li>
      )
    })

    return (
      <div>

        <nav className="navbar navbar-light bg-faded">
          <a className="navbar-brand" href="#">React Toggle</a>
            <ul className="nav navbar-nav">

              { link }

            </ul>
        </nav>

      </div> 
      )
  }
});

module.exports = NavBar;
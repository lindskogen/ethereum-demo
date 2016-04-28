import React from 'react';
import ReactDOM from 'react-dom'
import web3 from './web3'
import CreateAuction from './components/CreateAuction'

window.web3 = web3

const App = React.createClass({
  render() {
    return (
      <div>
        <CreateAuction/>
      </div>
    )
  }
})


ReactDOM.render(
  <App/>,
  document.getElementById('root')
)
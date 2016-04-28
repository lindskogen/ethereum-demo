import React from 'react';
import ReactDOM from 'react-dom'
import web3 from './web3.js'

window.web3 = web3

const App = React.createClass({
  render() {
    return <div>Hello world!</div>
  }
})


ReactDOM.render(
  <App/>
  , document.getElementById('root')
)
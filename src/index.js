import React from 'react';
import ReactDOM from 'react-dom'
import web3 from './web3'
import CreateAuction from './components/CreateAuction'
import ViewAuction from './components/ViewAuction'

window.web3 = web3

const bodyStyle = {
  display: 'flex',
  flexDirection: 'column',
  width: '40%',
  maxWidth: 600,
}

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  margin: '20 0'
}

const hrStyle = {
  background: 'black',
  width: '100%'
}

const App = React.createClass({
  render() {
    return (
      <div style={bodyStyle}>
        <CreateAuction style={formStyle}/>
        <hr style={hrStyle}/>
        <ViewAuction style={formStyle}/>
      </div>
    )
  }
})


ReactDOM.render(
  <App/>,
  document.getElementById('root')
)
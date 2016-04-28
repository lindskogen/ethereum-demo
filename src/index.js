import React from 'react';
import ReactDOM from 'react-dom'
import ReactRouter from 'react-router'
import web3 from './web3'
import CreateAuction from './components/CreateAuction'
import AuctionView from './components/AuctionView'
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
  getInitialState() {
    return {
      currentAuction: null
    }
  },
  handleSetAuction(auction) {
    console.log("setAuction", auction);
    this.setState({
      currentAuction: auction
    });
  },
  render() {
    const { currentAuction } = this.state;

    return (!currentAuction) ? (
      <div style={bodyStyle}>
        <CreateAuction style={formStyle} setAuction={this.handleSetAuction}/>
        <hr style={hrStyle}/>
        <ViewAuction style={formStyle} setAuction={this.handleSetAuction}/>
      </div>
    ) : (
      <div style={bodyStyle}>
        <AuctionView auction={currentAuction}/>
      </div>
    )
  }
})


ReactDOM.render(
  <App/>,
  document.getElementById('root')
)
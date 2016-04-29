import React from 'react';
import ReactDOM from 'react-dom'
import { Router, IndexRoute, Route, browserHistory } from 'react-router'
import web3 from './web3'
import NewAuction from './components/NewAuction'
import ShowAuction from './components/ShowAuction'
import AccountView from './components/AccountView'


window.web3 = web3

const bodyStyle = {
  display: 'flex',
  flexDirection: 'column',
  width: '80%',
  maxWidth: 600,
}

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
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
      currentAuction: null,
      account: web3.eth.defaultAccount
    }
  },
  handleSetAccount(account) {
    web3.eth.defaultAccount = account

    this.setState({
      account: account
    });
  },
  handleSetAuction(auction) {
    console.log("setAuction", auction);
    this.setState({
      currentAuction: auction
    }, () => {
      browserHistory.push('/show/' + auction.address)
    });
  },
  render() {
    const { currentAuction, account } = this.state;

    return (
      <div style={bodyStyle}>
        <AccountView account={account} setAccount={this.handleSetAccount}/>
        {React.cloneElement(this.props.children, {
          ...this.props.params,
          style: containerStyle,
          formStyle,
          account,
          setAuction: this.handleSetAuction,
          auction: currentAuction
        })}
      </div>
    )
  }
})


const AppRouter = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="new" component={NewAuction} />
      <Route path="show/:address" component={ShowAuction} />
      <IndexRoute component={NewAuction} />
    </Route>
  </Router>
)


ReactDOM.render(
  <AppRouter/>,
  document.getElementById('root')
)

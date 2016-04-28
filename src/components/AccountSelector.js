import React from 'react';
import web3 from '../web3';

const AccountSelector = React.createClass({
  getInitialState() {
    return {
      accounts: []
    }
  },
  componentWillMount() {
    const accounts = web3.eth.accounts

    if (accounts[0]) {
      this.value = accounts[0]
    }

    this.setState({ accounts });
  },
  render() {
    const { accounts } = this.state;
    return (
      <select onChange={(event) => this.value = event.target.value}>
        {accounts.map(account => <option key={account}>{account}</option>)}
      </select>
    )
  }
})

export default AccountSelector
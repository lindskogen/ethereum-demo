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

    this.setState({ accounts });
  },
  render() {
    const { accounts } = this.state;
    const { value } = this.props;
    return (
      <select value={value} onChange={(event) => this.props.setAccount(event.target.value)}>
        {accounts.map(account => <option key={account} value={account}>{account}</option>)}
      </select>
    )
  }
})

export default AccountSelector
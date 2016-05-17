import React from 'react'
import web3 from '../web3'
import { fromWei } from '../utils/Formatter'

const AccountBalance = React.createClass({
  render() {
    const balance = web3.eth.getBalance(this.props.account);

    return (
      <span>Balance: {fromWei(balance)} ether</span>
    )
  }
})

export default AccountBalance

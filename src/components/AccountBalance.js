import React from 'react'
import web3 from '../web3'

const AccountBalance = React.createClass({
  render() {
    var balance = web3.fromWei(web3.eth.getBalance(web3.eth.defaultAccount))
    return (
      <span>Balance: {balance.toString()} ether</span>
    )
  }
})

export default AccountBalance

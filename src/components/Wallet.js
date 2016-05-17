import React from 'react'
import web3 from '../web3'

const Wallet = React.createClass({
  handleSubmit(event) {
    event.preventDefault()

    web3.eth.sendTransaction({to: this.to.value, value: web3.toWei(parseFloat(this.amount.value, 10))})
  },
  render() {
    return (
        <div>
          <div>
            <div>My address: {this.props.account}</div>
          </div>
          <form onSubmit={this.handleSubmit}>
            <fieldset>
              <legend>Send money</legend>
              <input type="number" ref={(amount) => this.amount = amount} placeholder="Amount (in ether)" />
              <input type="string" ref={(to) => this.to = to} placeholder="To (address)" />
              <button>Send</button>
            </fieldset>
          </form>
        </div>
    )
  }
})

export default Wallet

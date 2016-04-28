import React from 'react'
import web3 from '../web3'

const PlaceBid = React.createClass({
  handleSubmit(event) {
    event.preventDefault()

    this.props.auction.placeBid({value: web3.toWei(parseFloat(this.amount.value, 10))})
  },
  render() {
    const {auction} = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <fieldset>
          <legend>Place new bid</legend>
          <input type="number" ref={(amount) => this.amount = amount} placeholder="Amount (in ether)" />
          <button>Place bid</button>
        </fieldset>
      </form>
    )
  }
})

export default PlaceBid

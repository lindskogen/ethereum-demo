import React from 'react';
import { getAuction } from '../lib/Auction'

const ViewAuction = React.createClass({
  handleSubmit(event) {
    event.preventDefault()
    const address = this.address.value

    try {
      const auction = getAuction(address)
      const leadingBid = auction.leadingBid();
      this.props.setAuction(auction)
    } catch (error) {
      console.error('Invalid hash:', address)
    }
  },
  render() {
    return (
      <form onSubmit={this.handleSubmit} style={this.props.style}>
        <input type="text" ref={(address) => this.address = address} placeholder="Address" />
        <button>View Auction</button>
      </form>
    )
  }
})

export default ViewAuction
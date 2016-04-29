import React from 'react'
import AuctionInfo from './AuctionInfo'
import PlaceBid from './PlaceBid'
import EndAuction from './EndAuction'
import { getAuction } from '../lib/Auction'

const ShowAuction = React.createClass({
  componentDidMount() {
    if (!this.props.auction && this.props.address) {
      this.props.setAuction(
        getAuction(this.props.address)
      );
    }
  },
  render() {
    const { auction } = this.props;
    if (!auction) {
      return (
        <div>
          Loading...
        </div>
      )
    }
    var isActive = auction.winner() == 0
    return (
        <div>
          <AuctionInfo auction={auction} />
          {isActive && <PlaceBid auction={auction} />}
          {isActive && auction.isSeller.call() && <EndAuction auction={auction} />}
        </div>
    )
  }
})

export default ShowAuction

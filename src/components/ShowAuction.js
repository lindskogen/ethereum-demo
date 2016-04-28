import React from 'react'
import AuctionInfo from './AuctionInfo'
import PlaceBid from './PlaceBid'
import EndAuction from './EndAuction'
import { getAuction } from '../lib/Auction'

const ShowAuction = React.createClass({
  componentDidMount() {
    if (!this.props.auction && this.props.params.address) {
      this.props.setAuction(
        getAuction(this.props.params.address)
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
    return (
        <div>
          <AuctionInfo auction={auction} />
          <PlaceBid auction={auction} />
          {auction.isSeller() && <EndAuction auction={auction} />}
        </div>
    )
  }
})

export default ShowAuction

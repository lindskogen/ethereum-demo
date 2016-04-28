import React from 'react'
import AccountSelector from './AccountSelector'
import AuctionInfo from './AuctionInfo'
import PlaceBid from './PlaceBid'
import EndAuction from './EndAuction'

const AuctionView = React.createClass({
  render() {
    const { auction } = this.props;
    return (
        <div>
          <AccountSelector />
          <AuctionInfo auction={auction} />
          <PlaceBid auction={auction} />
          {auction.isSeller() && <EndAuction auction={auction} />}
        </div>
    )
  }
})

export default AuctionView

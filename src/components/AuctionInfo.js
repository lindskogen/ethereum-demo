import React from 'react'

const AuctionInfo = React.createClass({
  render() {
    const {auction} = this.props;
    return (
          <dl>
            <dt>Viewing auction:</dt>
            <dd>{auction.address}</dd>
            <dt>Item:</dt>
            <dd>{auction.item}</dd>
            <dt>Leader:</dt>
            <dd>{auction.leader}</dd>
            <dt>Leading bid:</dt>
            <dt>{auction.leadingBid}</dt>
          </dl>
    )
  }
})

export default AuctionInfo

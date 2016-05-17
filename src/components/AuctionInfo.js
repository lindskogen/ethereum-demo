import React from 'react'
import { fromWei } from '../utils/Formatter'

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  margin: '2em 1em',
  fontFamily: 'monospace'
}

const rowStyle = {
  display: 'flex'
}

const AuctionInfo = React.createClass({
  render() {
    const { auction } = this.props;

    return (
      <div style={containerStyle}>
        <div style={rowStyle}>Viewing auction: {auction.address}</div>
        <div style={rowStyle}>Item: {auction.item()}</div>
        {auction.winner() == 0 && <div style={rowStyle}>Leader: {auction.leader()}</div>}
        {auction.winner() == 0 && <div style={rowStyle}>Leading bid: {fromWei(auction.leadingBid())} Ether</div>}
        {auction.winner() != 0 && <div style={rowStyle}>Winner: {auction.winner()}</div>}
        {auction.winner() != 0 && <div style={rowStyle}>Wining bid: {fromWei(auction.leadingBid())} Ether</div>}
      </div>
    )
  }
})

export default AuctionInfo

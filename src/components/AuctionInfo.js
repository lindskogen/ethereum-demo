import React from 'react'

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
        <div style={rowStyle}>Leader: {auction.leader()}</div>
        <div style={rowStyle}>Leading bid: {auction.leadingBid().toString()}</div>
      </div>
    )
  }
})

export default AuctionInfo

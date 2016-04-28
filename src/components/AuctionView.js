import React from 'react'
import AccountSelector from './AccountSelector'

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  width: '40%',
  maxWidth: 600,
}

const AuctionView = React.createClass({
  render() {
    const {auction} = this.props;
    return (
        <div>
          <AccountSelector />
          <AuctionInfo auction={auction} />
          <PlaceBid auction={auction} />
        </div>
    }
})

export default AuctionView

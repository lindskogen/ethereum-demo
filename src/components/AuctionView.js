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
          <form onSubmit={this.handleSubmit} style={formStyle}>
          </form>
        </div>

    }
})

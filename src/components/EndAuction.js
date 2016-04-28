import React from 'react'

const EndAuction = React.createClass({
  handleSubmit(event) {
    event.preventDefault()

    this.props.auction.endAuction()
  },
  render() {
    const {auction} = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <fieldset>
          <legend>Auction settings</legend>
          <button>End auction</button>
        </fieldset>
      </form>
    )
  }
})

export default EndAuction

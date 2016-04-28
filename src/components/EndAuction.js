import React from 'react'

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  width: '40%',
  maxWidth: 600,
}

const EndAuction = React.createClass({
  handleSubmit(event) {
    event.preventDefault()

    this.props.auction.endAuction()
  },
  render() {
    const {auction} = this.props;
    return (
      <form onSubmit={this.handleSubmit} style={formStyle}>
        <fieldset>
          <legend>Auction settings</legend>
          <button>End auction</button>
        </fieldset>
      </form>
    )
  }
})

export default EndAuction

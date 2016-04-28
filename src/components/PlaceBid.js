import React from 'react'

const PlaceBid = React.createClass({
  render() {
    const {auction} = this.props;
    return (
      <form onSubmit={this.handleSubmit} style={formStyle}>
        <fieldset>
          <legend>Place new bid</legend>
          <input type="number" ref={(amount) => this.amount = amount} placeholder="Amount" />
          <button>Place bid>
        </fieldset>
      </form>
    )
  }
})

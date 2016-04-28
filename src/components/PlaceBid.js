import React from 'react'
import { toWei } from '../utils/Formater'

const PlaceBid = React.createClass({
  handleSubmit(event) {
    event.preventDefault()

    this.props.auction.placeBid({value: toWei(ParseInt(this.amount.value, 10))})
  },
  render() {
    const {auction} = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <fieldset>
          <legend>Place new bid</legend>
          <input type="number" ref={(amount) => this.amount = amount} placeholder="Amount" />
          <button>Place bid</button>
        </fieldset>
      </form>
    )
  }
})

export default PlaceBid

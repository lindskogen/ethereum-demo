import React from 'react';
import AccountSelector from './AccountSelector'
import { createAuction } from '../lib/Auction'
import { toWei } from '../utils/Formater'

const CreateAuction = React.createClass({
  handleSubmit(event) {
    event.preventDefault()

    createAuction(this.item.value, toWei(parseInt(this.price.value, 10)), this.account.value, (err, contract) => {
      if (err) {
        console.error(err)
      } else if (contract.address) {
        console.log('Contract added', contract);
        this.props.setAuction(contract)
      }
    });
  },
  render() {
    return (
      <form onSubmit={this.handleSubmit} style={this.props.style}>
        <AccountSelector ref={(account) => this.account = account} />
        <input type="text" ref={(item) => this.item = item} placeholder="Item" />
        <input type="number" ref={(price) => this.price = price} placeholder="Price" />
        <button>Create Auction</button>
      </form>
    )
  }
})

export default CreateAuction

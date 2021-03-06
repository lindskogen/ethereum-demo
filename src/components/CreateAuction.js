import React from 'react';
import { createAuction } from '../lib/Auction'
import web3 from '../web3'

const CreateAuction = React.createClass({
  handleSubmit(event) {
    event.preventDefault()

    createAuction(this.item.value, web3.toWei(parseFloat(this.price.value, 10)), (err, contract) => {
      if (err) {
        console.error(err)
      } else if (contract.address) {
        console.log('Contract added', contract);
        this.props.setAuction(contract)
      }
    });
    this.item.value = ''
    this.price.value = ''
  },
  render() {
    return (
      <form onSubmit={this.handleSubmit} style={this.props.style}>
        <input type="text" ref={(item) => this.item = item} placeholder="Item" />
        <input type="number" ref={(price) => this.price = price} placeholder="Price (in ether)" />
        <button>Create Auction</button>
      </form>
    )
  }
})

export default CreateAuction

import React from 'react';
import AccountSelector from './AccountSelector'

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  width: '40%',
  maxWidth: 600,
}

const CreateAuction = React.createClass({
  handleSubmit(event) {
    event.preventDefault()

    const formFields = {
      account: this.account.value,
      item: this.item.value,
      price: this.price.value
    };
    console.log(formFields);
  },
  render() {
    return (
      <form onSubmit={this.handleSubmit} style={formStyle}>
        <AccountSelector ref={(account) => this.account = account} />
        <input type="text" ref={(item) => this.item = item} placeholder="Item" />
        <input type="number" ref={(price) => this.price = price} placeholder="Price" />
        <button>Create Auction</button>
      </form>
    )
  }
})

export default CreateAuction
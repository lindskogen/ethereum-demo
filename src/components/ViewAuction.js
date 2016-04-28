import React from 'react';

const ViewAuction = React.createClass({
  handleSubmit(event) {
    event.preventDefault()

    const formFields = {
      address: this.address.value
    };
    console.log(formFields);
  },
  render() {
    return (
      <form onSubmit={this.handleSubmit} style={this.props.style}>
        <input type="text" ref={(address) => this.address = address} placeholder="Address" />
        <button>View Auction</button>
      </form>
    )
  }
})

export default ViewAuction
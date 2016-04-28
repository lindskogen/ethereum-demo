import React from 'react'
import AccountSelector from './AccountSelector'
import AccountBalance from './AccountBalance'

const AccountView = React.createClass({
  render() {
    return (
      <div style={{display:"flex", justifyContent:"space-between"}}>
        <AccountSelector value={this.props.value} setAccount={this.props.setAccount} />
        <AccountBalance />
      </div>
    )
  }
})

export default AccountView

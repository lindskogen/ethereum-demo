import React from 'react'
import AccountSelector from './AccountSelector'
import AccountBalance from './AccountBalance'

const AccountView = React.createClass({
  render() {
    return (
      <div style={{display:"flex", justifyContent:"space-between"}}>
        <AccountSelector value={this.props.account} setAccount={this.props.setAccount} />
        <AccountBalance account={this.props.account}/>
      </div>
    )
  }
})

export default AccountView

import React from 'react'
import CreateAuction from './CreateAuction'
import ViewAuction from './ViewAuction'


const NewAuction = React.createClass({
  render() {
    const { formStyle, style, account, setAuction } = this.props;

    return (
      <div style={style}>
        <CreateAuction style={formStyle} setAuction={setAuction} account={account} />
        <hr/>
        <ViewAuction style={formStyle} setAuction={setAuction} />
      </div>
    )
  }
})

export default NewAuction
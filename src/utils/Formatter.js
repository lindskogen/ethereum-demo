import web3 from '../web3'

export const toWei = (ether) => web3.toWei(ether).toString()

export const fromWei = (ether) => web3.fromWei(ether).toString()

import Web3 from 'web3'
import { hostname } from './config'

const web3 = new Web3()

web3.setProvider(new web3.providers.HttpProvider(`http://${hostname}:8545`))

export default web3

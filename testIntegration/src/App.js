import React, { Component } from 'react'
import MinerContract from '../build/contracts/Miner.json'
import getWeb3 from './utils/getWeb3'

import './css/oswald.css'
import './css/open-sans.css'
import './css/pure-min.css'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      storageValue: 0,
      web3: null
    }
  }

  componentWillMount() {
    // Get network provider and web3 instance.
    // See utils/getWeb3 for more info.

    getWeb3
    .then(results => {
      this.setState({
        web3: results.web3
      })

      // Instantiate contract once web3 provided.
      this.instantiateContract()
    })
    .catch(() => {
      console.log('Error finding web3.')
    })
  }

  instantiateContract() {
    /*
     * SMART CONTRACT EXAMPLE
     *
     * Normally these functions would be called in the context of a
     * state management library, but for convenience I've placed them here.
     */

    const contract = require('truffle-contract')
    const miner = contract(MinerContract)
    miner.setProvider(this.state.web3.currentProvider)

    // Declaring this for later so we can chain functions on SimpleStorage.
    var minerStorageInstance

    function genID() {
      return Math.floor((1 + Math.random()) * 0x10000)
         .toString(16)
         .substring(1);
    }

    // Get accounts.
    this.state.web3.eth.getAccounts((error, accounts) => {
      miner.deployed().then((instance) => {
        minerStorageInstance = instance

        // Stores a given value, 5 by default.
        var genId = genID();
        var guysName = "";
        var isVerif = true;
        var proof = 

        return minerStorageInstance.set(genId, guysName, isVerif, proof, {from: accounts[0]})
      }).then((result) => {
        // Get the value from the contract to prove it worked.
        return minerStorageInstance.get.call(accounts[0])
      }).then((result) => {
        // Update state with the result.
        return this.setState({ storageValue: result.c[0] })
      })
    })
  }

  render() {
    return (
      <div className="App">
        <nav className="navbar pure-menu pure-menu-horizontal">
            <a href="#" className="pure-menu-heading pure-menu-link">GroundWorks</a>
        </nav>

        <main className="container">

          <div className="pure-g">
            <div className="pure-u-1-1">

              <p>The stored value is: {this.state.storageValue}</p>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App

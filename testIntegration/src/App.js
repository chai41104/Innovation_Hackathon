import React, { Component } from 'react';
import MinerContract from '../build/contracts/Miner.json';
import getWeb3 from './utils/getWeb3';
import { FormGroup, ControlLabel, HelpBlock, FormControl } from 'react-bootstrap';

import './css/oswald.css';
import './css/open-sans.css';
import './css/pure-min.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      storageValue: 0,
      web3: null
    }

    this.handleChange = this.handleChange.bind(this);
    this.genID = this.genID.bind(this);
    this.instantiateContract = this.instantiateContract.bind(this);
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

  genID() {
    return Math.floor((1 + Math.random()) * 0x10000)
       .toString(16)
       .substring(1);
  }

  instantiateContract() {
    const contract = require('truffle-contract')
    const miner = contract(MinerContract)
    miner.setProvider(this.state.web3.currentProvider)

    // Declaring this for later so we can chain functions on SimpleStorage.
    var minerStorageInstance

    // Get accounts.
    this.state.web3.eth.getAccounts((error, accounts) => {
      miner.deployed().then((instance) => {
        minerStorageInstance = instance

        // Stores a given value, 5 by default.
        var genId = this.genID;
        var guysName = "";
        var isVerif = true;
        var proof = "";


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

  handleChange(event) {
    this.setState({value: event.target.value});
  }



  render() {
    return (
      <div className="App">

        <nav className="navbar pure-menu pure-menu-horizontal">
            <a href="#" className="pure-menu-heading pure-menu-link">GroundWorks</a>
            <a href="#" className="pure-menu-link">Artisanal Minners Blockchain KYC</a>
            <a href="#" className="pure-menu-link">Drone Sample Collection</a>
        </nav>

        <main className="container">
          <div className="pure-g">
            <div className="pure-u-1-1">
            <section className="content">
              <div className="box box-primary">
              <div className="row">
              <div className="col-md-6 col-md-offset-3">
                <form role="form" onSubmit={this.handleSubmit}>
                  <div className="box-body">
                    <div className="form-group">
                      <div className="radio">
                        <label/>
                          <input type="radio" name="optionsRadios" id="optionsRadios1" value={this.state.value} onChange={this.handleChange} checked />
                          Passport
                      </div>
                      <div className="radio">
                        <label />
                          <input type="radio" name="optionsRadios" id="optionsRadios2" value={this.state.value} onChange={this.handleChange} />
                          Valid ID
                      </div>
                      <div className="radio">
                        <label/>
                          <input type="radio" name="optionsRadios" id="optionsRadios3" value={this.state.value} onChange={this.handleChange} />
                          Driver Licence
                      </div>
                    </div>

                    <div className="form-group">
                      <label for="exampleInputFile" value={this.state.value} onChange={this.handleChange} />Upload your document
                      <input type="file" id="exampleInputFile" />
                    </div>
                    <div className="form-group">
                      <div className="input-group">
                          <span className="input-group-addon">@</span>
                          <input type="text" className="form-control" placeholder="Your name" value={this.state.value} onChange={this.handleChange} />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="input-group">
                        <span className="input-group-addon"><i className="fa fa-envelope"></i></span>
                        <input type="email" className="form-control" placeholder="Your Email" value={this.state.value} onChange={this.handleChange} />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="input-group">
                        <span className="input-group-addon"><i className="fa fa-phone"></i></span>
                        <input type="email" className="form-control" placeholder="Your phonenumber" value={this.state.value} onChange={this.handleChange} />
                      </div>
                    </div>
                    <div className="checkbox">
                      <label />
                        <input type="checkbox" /><label />I agree with <a href="#">licence</a> and I understand.
                    </div>
                  </div>
                  <div className="box-footer">
                    <a onclick="{this.instantiateContract}" className="btn btn-primary">Process</a>
                  </div>
                </form>
              </div>
              </div>
              </div>
            </section>


              <p>The stored value is: {this.state.storageValue}</p>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App

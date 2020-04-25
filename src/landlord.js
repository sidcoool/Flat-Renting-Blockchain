import React, { Component } from "react";
import web3 from './web3'
import contract from './rent'
import './CSS/todo.css'

const h={
    fontSize:'25px',
    color:'#53adcb'
}

class Landlord extends Component {
  constructor(props) {
    super(props);

    this.state = {
      landlordName: "sid",
      email: "sid@g.com",
      phoneno: 9999888811,
      Houseaddress: "jiit",
      city: "agra",
      rentAmount: 313,
      BHK: 2,
      securityFee: 3,
      negotiable: "no",
    };
  }

  componentDidMount(){
  }

  handleLandlordNameChange = (event) => {
    this.setState({
      landlordName: event.target.value,
    });
  };

  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  handlePhoneNumChange = (event) => {
    this.setState({
      phoneno: event.target.value,
    });
  };

  handleHouseAddressChange = (event) => {
    this.setState({
      Houseaddress: event.target.value,
    });
  };

  handleCityChange = (event) => {
    this.setState({
      city: event.target.value,
    });
  };

  handleRentChange = (event) => {
    this.setState({
      rentAmount: event.target.value,
    });
  };

  handleBHKChange = (event) => {
    this.setState({
      BHK: event.target.value,
    });
  };

  handleSecurityFeeChange = (event) => {
    this.setState({
      securityFee: event.target.value,
    });
  };

  handleNegotiableChange = (event) => {
    this.setState({
      negotiable: event.target.value,
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const {
      landlordName,
      email,
      phoneno,
      Houseaddress,
      city,
      rentAmount,
      BHK,
      securityFee,
      negotiable,
    } = this.state;

    if(negotiable == "yes")
    negotiable = true
    else
    negotiable = false

    // contract = contract.eth
    const accounts = await web3.eth.getAccounts();
    const x = await contract.methods.setFlatInfo(landlordName,email,phoneno,Houseaddress,city,rentAmount,BHK,securityFee,negotiable)
    .send({from: accounts[0]})
    // const fl = await contract.methods.flats(0).call();
    console.log(x)
    
  };

  render() {
    const {
      landlordName,
      email,
      phoneno,
      Houseaddress,
      city,
      rentAmount,
      BHK,
      securityFee,
      negotiable,
    } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <h1>Flat Info</h1>
        </div>
        <div>
          <br />

          <label>Username </label>
          <input
            type="text"
            value={landlordName}
            onChange={this.handleLandlordNameChange}
          />
        </div>
        <br />

        <div>
          <label>Email</label>
          <input type="email" value={email} onChange={this.handleEmailChange} />
        </div>
        <br />

        <div>
          <label>House Address</label>
          <input
            type="text"
            value={Houseaddress}
            onChange={this.handleHouseAddressChange}
          />
        </div>
        <br />

        <div>
          <label>Phone Number</label>
          <input
            type="number"
            value={phoneno}
            onChange={this.handlePhoneNumChange}
          />
        </div>
        <br />

        <div>
          <label>City</label>
          <input type="text" value={city} onChange={this.handleCityChange} />
        </div>
        <br />

        <div>
          <label>Rent Amount</label>
          <input
            type="number"
            value={rentAmount}
            placeholder="In Ethers"
            onChange={this.handleRentChange}
          />
        </div>
        <br />

        <div>
          <label>BHK</label>
          <select value={BHK} onChange={this.handleBHKChange}>
            <option value="2">2 BHK</option>
            <option value="3">3 BHK</option>
            <option value="4">4 BHK</option>
          </select>
        </div>
        <br />

        <div>
          <label>Security Fees</label>
          <input
            type="text"
            value={securityFee}
            onChange={this.handleSecurityFeeChange}
          />
        </div>
        <br />

        <div>
          <label>Negotiable</label>
          <select value={negotiable} onChange={this.handleNegotiableChange}>
            <option value="yes">YES</option>
            <option value="no">NO</option>
          </select>
        </div>
        <br />

        <button className="btn btn-success" type="submit">Submit</button>
      </form>
    );
  }
}

export default Landlord;

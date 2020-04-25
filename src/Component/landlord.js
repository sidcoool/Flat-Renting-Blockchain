import React, { Component } from "react";
import './CSS/todo.css'

class Landlord extends Component {
  constructor(props) {
    super(props);

    this.state = {
      landlordName: "",
      email: "",
      phoneno: "",
      Houseaddress: "",
      city: "",
      rentAmount: "",
      BHK: "",
      securityFee: "",
      negotiable: "",
    };
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

  handleSubmit = (event) => {
    alert(`Details Submitted`);
    event.preventDefault();
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
          <label>Username :</label>
          <input
            type="text"
            value={landlordName}
            onChange={this.handleLandlordNameChange}
          />
        </div>
        
        <div>
          <label>Email : </label>
          <input type="text" value={email} onChange={this.handleEmailChange} />
        </div>
        <div>
          <label>House Address : </label>
          <input
            type="text"
            value={Houseaddress}
            onChange={this.handleHouseAddressChange}
          />
        </div>
        
        <div>
          <label>Phone Number : </label>
          <input
            type="number"
            value={phoneno}
            onChange={this.handlePhoneNumChange}
          />
        </div>
        
        <div>
          <label>City : </label>
          <input type="text" value={city} onChange={this.handleCityChange} />
        </div>
        
        <div>
          <label>Rent Amount : </label>
          <input
            type="number"
            value={rentAmount}
            placeholder="In Ethers"
            onChange={this.handleRentChange}
          />
        </div>
        
        <div>
          <label>BHK : </label>
          <select value={BHK} onChange={this.handleBHKChange}>
            <option value="2">2 BHK</option>
            <option value="3">3 BHK</option>
            <option value="4">4 BHK</option>
          </select>
        </div>
        
        <div>
          <label>Security Fees : </label>
          <input
            type="number"
            value={securityFee}
            onChange={this.handleSecurityFeeChange}
          />
        </div>
        <div>
          <label>Negotiable : </label>
          <select value={negotiable} onChange={this.handleNegotiableChange}>
            <option value="yes">YES</option>
            <option value="no">NO</option>
          </select>
        </div>
        
        <button type="submit" class="bttn">Submit </button>
      </form>
    );
  }
}

export default Landlord;


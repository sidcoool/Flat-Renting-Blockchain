import React, { Component } from "react";
import web3 from "./web3";
import contract from "./rent";
import './CSS/todo.css'


const h={
    fontSize:'25px',
    color:'#53adcb'
}

class Tenant extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "sid@g.com",
      username: "sid",
      phone: 312421,
      city: "agra",
      start: 2,
      end: 5,
      bhk: 2,
      duration: 1,
      flats: [],
      message: ""
    };
  }

  selectedFlats = [
    
  ];

  changeUser = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  changePhone = (event) => {
    this.setState({
      phone: event.target.value,
    });
  };

  changEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  chnageCity = (event) => {
    this.setState({
      city: event.target.value,
    });
  };

  changeRangeStart = (event) => {
    this.setState({
      start: event.target.value,
    });
  };

  changeRangeEnd = (event) => {
    this.setState({
      end: event.target.value,
    });
  };

  changeBHK = (event) => {
    this.setState({
      bhk: event.target.value,
    });
  };

  changeDuration = (event) => {
    this.setState({
      duration: event.target.value,
    });
  };

  bookFlat = async (securityFee,landlordAddress) => {

      const accounts = await web3.eth.getAccounts();
      const x = await contract.methods.bookFlat("0x4528FA8Ff8A488bAa4A94C1Be52817EcBdAD1F34").send({
          from: accounts[0],
          
          value:web3.utils.toWei(securityFee.toString(), 'ether')
      })

      this.setState({
          meassage: "Congratulation Flat Booked !"
      })
  } 


  

  makeList = (searchedFlats) => {
    let flatList = searchedFlats.map((flat) => (
      <li>
        <div className="card" style={{width: "20rem"}}>
          <a href="#" className="card-img-top"></a>
          <img src="https://globalrealtor.co.in/sites/default/files/images/property/flat%20for%20rent.jpg"
           className="card-img-top"></img>
          <div className="card-body">
            <p className="card-text">
              <b>{flat.city}</b> <br />
              <b>Price: {flat.rentAmount} </b>&nbsp;&nbsp;&nbsp;&nbsp;
              <a href="#" onClick={() => this.bookFlat(flat.securityFee, flat.landlordAddress)}> BOOK </a>
            </p>
          </div>
        </div>
      </li>
    ));

    this.setState({
      flats: flatList,
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const {
      email,
      username,
      phone,
      city,
      start,
      end,
      bhk,
      duration,
    } = this.state;

    // const accounts = await web3.eth.getAccounts();
    // const x = await contract.methods.setTenant(username, email, phone, city, start, end, bhk, duration)
    // .send({from: accounts[0]})
    // const fl = await contract.methods.tenant(0).call();
    // console.log(fl)

    // const y = await contract.methods.searchFlats().send({from: accounts[0]});
    // console.log(y)

    for (let i = 0; i < 10; i++) {
      contract.methods
        .searchedFlats(i)
        .call()
        .then((v) => {
          this.selectedFlats.push(v)
          this.makeList(this.selectedFlats)
          console.log(v);
        })
        .catch((err) => {
          console.log(err);
    
        });
    }

    //this.makeList(this.selectedFlats)
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <h1>Potential Tenant</h1>
          </div>
          <div>
            <br />
            <label>Username : </label>
            <br />
            <input
              type="text"
              value={this.state.username}
              onChange={this.changeUser}
            />
          </div>
          <div>
            <br />
            <label>Email : </label>
            <br />
            <input
              type="email"
              value={this.state.email}
              onChange={this.changEmail}
            />
          </div>
          <div>
            <br />
            <label>Phone no : </label>
            <br />
            <input
              type="number"
              value={this.state.phone}
              onChange={this.changePhone}
            />
          </div>
          <div>
            <br />
            <label>City : </label>
            <br />
            <input
              type="text"
              value={this.state.city}
              onChange={this.chnageCity}
            />
          </div>
          <div>
            <br />
            <label>Range Start: </label>
            {/* <br /> */}
            <select value={this.state.rangeStart} onChange={this.changeRange}>
              <option value="5">5K</option>
              <option value="10">10K</option>
              <option value="25">25K</option>
              <option value="50K">50k</option>
              <option value="100K">100K</option>
            </select>
          {/* </div>
          <br />

          <div> */} 
          
            <label className="ml-4">Range End: </label>
            {/* <br /> */ }
            <select value={this.state.rangeEnd} onChange={this.changeRange}>
              <option value="10">10K</option>
              <option value="25">25K</option>
              <option value="50">50K</option>
              <option value="100">100k</option>
              <option value="200">200K</option>
            </select>
          </div>

          <div>
            <br />
            <label>BHK : </label>
            <br />
            <select value={this.state.bhk} onChange={this.changeBHK}>
              <option value="1">1 BHK</option>
              <option value="2">2 BHK</option>
              <option value="3">3 BHK</option>
              <option value="4">4 BHK</option>
            </select>
          </div>
          <div>
            <br />
            <label>Time period : </label>
            <br />
            <select value={this.state.duration} onChange={this.changeDuration}>
              <option value="1">1 year</option>
              <option value="2">2 years</option>
              <option value="3">3 years</option>
              <option value="4">4 years or more</option>
            </select>
          </div>
          <button className="btn btn-success" type="submit">Submit</button>
        </form>
        <br />

        <ul type="none">{this.state.flats}</ul>

        <div>
            <p>
                {this.state.message}
            </p>
        </div>
      </div>
    );
  }
}

export default Tenant;

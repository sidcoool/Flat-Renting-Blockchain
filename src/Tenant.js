import React,{ Component } from 'react'
import web3 from './web3'
import contract from './rent'

class Tenant extends Component{

    constructor(props){
        super(props)

        this.state = {
            email:'sid@g.com',
            username:'sid',
            phone:'312421',
            city:'agra',
            start:2,
            end:5,
            range:'5to10k',
            bhk:2,
            duration:3
        }
    }
    changeUser = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    changePhone = (event) =>{
        this.setState({
            phone:event.target.value
        })
    }

    changEmail = (event) =>{
        this.setState({
            email: event.target.value
        })
    }

    chnageCity = (event) =>{
        this.setState({
            city:event.target.value
        })
    }

    changeRange=(event) =>{
        this.setState({
            range:event.target.value
        })
    }

    changeBHK=(event) =>{
        this.setState({
            bhk:event.target.value
        })
    }

    handleSubmit = async (event) =>{
        event.preventDefault();
        const{
            email,
            username,
            phone,
            city,
            start,
            end,
            range,
            bhk,
            duration
        } = this.state;

        // const x = await contract.methods.setTenant(username, email, phone, city, start, end, bhk, duration)
        // .send({from: "0xd549b1DFCb6176B92F2CCDe8325C3948ceb0c705"})
        // const fl = await contract.methods.tenant(0).call();
        // console.log(fl)

        // const y = await contract.methods.searchFlats().send({from: "0xd549b1DFCb6176B92F2CCDe8325C3948ceb0c705"});
        // console.log(y)
        for(let i=0; i<10; i++){
            contract.methods.searchedFlats(i).call().then(v => {
                console.log(v)
            })
            .catch(err => {
                console.log(err)
                bk = true
            })
        }
    }

    render(){
        return( 
            <form onSubmit={this.handleSubmit}>
            <div>
                <h1>Potential Tenant</h1>
            </div>
                <div>
                    <br/>
                    <label>Username : </label><br/>
                    <input type='text' value={this.state.username} onChange={this.changeUser}/>
                </div>
                <div>
                    <br/>
                    <label>Email : </label><br/>
                    <input type='text' value={this.state.email} onChange={this.changEmail}/>
                </div>
                <div>
                    <br/>
                    <label>Phone no : </label><br/>
                    <input type='text' value={this.state.phone} onChange={this.changePhone}/>
                </div>
                <div>
                    <br/>
                    <label>City : </label><br/>
                    <input type='text' value={this.state.city} onChange={this.chnageCity}/>
                </div>
                <div>
                    <br/>
                    <label>Range : </label><br/>
                    <select value={this.state.range} onChange={this.changeRange}>
                    <option value="5to10K">5to10K</option>
                    <option value="10to25K">10to25K</option>
                    <option value="25to50K">25to50K</option>
                    <option value="50to100k">50to100k</option>
                    <option value="100K+">100K+</option>
                    </select>
                </div>
                <div>
                    <br/>
                    <label>BHK : </label><br/>
                    <select value={this.state.bhk} onChange={this.changeBHK}>
                    <option value="1BHK">1 BHK</option>
                    <option value="2BHK">2 BHK</option>
                    <option value="3BHK">3 BHK</option>
                    <option value="4BHK">4 BHK</option>
                    </select>
                </div>
                <div>
                    <br/>
                    <label>Time period : </label><br/>
                    <select value={this.state.duration} onChange={this.changeDuration}>
                    <option value="6months">6 months</option>
                    <option value="1year">1 year</option>
                    <option value="2year">2 year</option>
                    <option value="more">More</option>   
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Tenant
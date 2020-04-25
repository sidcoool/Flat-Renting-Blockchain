import React,{ Component } from 'react'
import './CSS/todo.css'

const h={
    fontSize:'25px',
    color:'#53adcb'
}

class Form extends Component{

    constructor(props){
        super(props)
        this.state = {
            email:'',
            username:'',
            phone:'',
            city:'',
            range:'5to10k',
            bhk:'1',
            duration:'6months'
        }
    }
    changeUser = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    changePhone = (event) =>{
        this.setState({
            phone : event.target.value
        })
    }

    changEmail = (event) =>{
        this.setState({
            email : event.target.value
        })
    }

    chnageCity = (event) =>{
        this.setState({
            city : event.target.value
        })
    }

    changeRange=(event) =>{
        this.setState({
            range : event.target.value
        })
    }

    changeBHK=(event) =>{
        this.setState({
            bhk : event.target.value
        })
    }

    changeDuration=(event) =>{
        this.setState({
            duration : event.target.value
        })
    }

    handleSubmit = (event) =>{
        alert(`Details submitted`)
        event.preventDefault()
    }

    render(){
        return( 
            <form onSubmit={this.handleSubmit} >
            <div>
                <h1>Tenant Info</h1>
            </div>
                <div>
                    
                    <label>Username : </label>
                    <input type='text' value={this.state.username} onChange={this.changeUser}/>
                </div>
                <div>
                    
                    <label>Email : </label>
                    <input type='text' value={this.state.email} onChange={this.changEmail}/>
                </div>
                <div>
                    
                    <label>Phone no : </label>
                    <input type='number' value={this.state.phone} onChange={this.changePhone}/>
                </div>
                <div>
                    
                    <label>City : </label>
                    <input type='text' value={this.state.city} onChange={this.chnageCity}/>
                </div>
                <div>
                
                    <label>Range : </label>
                    <select value={this.state.range} onChange={this.changeRange}>
                    <option value="5to10K">5to10K</option>
                    <option value="10to25K">10to25K</option>
                    <option value="25to50K">25to50K</option>
                    <option value="50to100k">50to100k</option>
                    <option value="100K+">100K+</option>
                    </select>
                </div>
                <div>
                
                    <label>BHK : </label>
                    <select value={this.state.bhk} onChange={this.changeBHK}>
                    <option value="1">1 BHK</option>
                    <option value="2">2 BHK</option>
                    <option value="3">3 BHK</option>
                    <option value="4">4 BHK</option>
                    </select>
                </div>
                <div>
                   
                    <label>Time period : </label>
                    <select value={this.state.duration} onChange={this.changeDuration}>
                    <option value="6months">6 months</option>
                    <option value="1year">1 year</option>
                    <option value="2year">2 year</option>
                    <option value="more">More</option>   
                    </select>
                </div>
                <br/>
                <button type="submit" class="bttn">Submit</button>
            </form>
        )
    }
}

export default Form
import React, { Component } from 'react'
import Landlord from './landlord'
import Tenant from './Form'
import './CSS/home.css'

let element 

class Home extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             formType: "landlord"
        }
    }

    handleLandlordChange = () => {
        this.setState({
            formType: "landlord"
        })
    }

    handleTenantChange = () => {
        this.setState({
            formType: "tenant"
        })
    }

    render() {
        if(this.state.formType == "landlord"){
            element = <Landlord/>
        }
        else{
            element = <Tenant/>
        }

        return (
            <div >
                <div>
                    <button className="btn" onClick={() => this.handleLandlordChange()}>Landlord</button> <br/>
                    <button className="btn" onClick={() => this.handleTenantChange()}>Tenant</button> <br/> <br/>
                </div>

                {element}
                
            </div>
        )
      
    }
}

export default Home
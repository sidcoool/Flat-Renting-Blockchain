import React, { Component } from 'react'
import Landlord from './landlord'
import Tenant from './Tenant'
//import './CSS/home.css'


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
            <div className="container text-center">
                <div className="d-flex justify-content-around p-2">
                    <button className="btn btn-info" onClick={() => this.handleLandlordChange()}>Landlord</button> <br/>
                    <button className="btn btn-info" onClick={() => this.handleTenantChange()}>Tenant</button> <br/> <br/>
                </div>

                {element}
                
            </div>
        )
      
    }
}

export default Home

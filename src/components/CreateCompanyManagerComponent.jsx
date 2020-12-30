import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addCompanyManager} from '../actions/actions'
import PropTypes from "prop-types";
class CreateCompanyManagerComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            companyManagerId: '',
            companyManagerName: '',
            companyManagerEmailId: '',
            companyManagerPhone:''
        }
        this.changeCompanyManagerIdHandler = this.changeCompanyManagerIdHandler.bind(this);
        this.changeCompanyManagerNameHandler = this.changeCompanyManagerNameHandler.bind(this);
        this.changeCompanyManagerEmailHandler = this.changeCompanyManagerEmailHandler.bind(this);
        this.changeCompanyManagerPhoneHandler = this.changeCompanyManagerPhoneHandler.bind(this)
        this.saveCompanyManager = this.saveCompanyManager.bind(this);
    }
    


    saveCompanyManager = (e) => {
        e.preventDefault();
        let companymanager = {companyManagerId: this.state.companyManagerId, 
            companyManagerName: this.state.companyManagerName, 
            companyManagerEmailId: this.state.companyManagerEmailId, 
            companyManagerPhone: this.state.companyManagerPhone
        };
        console.log('Company Manager => ' + JSON.stringify(companymanager));
        this.props.addCompanyManager(companymanager);
        this.props.history.push("/CompanyManager")
    }
    
        
    
    changeCompanyManagerIdHandler= (event) => {
        this.setState({companyManagerId: event.target.value});
    }

    changeCompanyManagerNameHandler= (event) => {
        this.setState({companyManagerName: event.target.value});
    }

    changeCompanyManagerEmailHandler= (event) => {
        this.setState({companyManagerEmailId: event.target.value});
    }

    changeCompanyManagerPhoneHandler= (event) => {
        this.setState({companyManagerPhone: event.target.value});
    }

    cancel(){
        this.props.history.push('/CompanyManager');
    }

    
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    // this.getTitle()
                                }
                                  <h3 className="text-center" >Add Company Manager</h3>

                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Manager ID </label>
                                            <input type='text' placeholder="Unique Company Manager ID" 
                                                name="companyManagerId" 
                                                className="form-control"
                                                value={this.state.companyManagerId} 
                                                onChange={this.changeCompanyManagerIdHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Manager Name </label>
                                            <input type='text' placeholder="Enter Manager Name" 
                                                   name="companyManagerName" 
                                                   className="form-control"
                                                   value={this.state.companyManagerName} 
                                                   onChange={this.changeCompanyManagerNameHandler} />
                                        </div>
                                        <div className = "form-group">
                                            <label>Email ID</label>
                                            <input type='email' placeholder="Enter valid Email Id" 
                                                   name="companyManagerEmailId" 
                                                   className="form-control" 
                                                   value={this.state.companyManagerEmailId} 
                                                   onChange={this.changeCompanyManagerEmailHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label>Phone Number</label>
                                            <input type='text' placeholder="Phone Number" 
                                                   name="companyManagerPhone" className="form-control" 
                                                   value={this.state.companyManagerPhone} 
                                                   onChange={this.changeCompanyManagerPhoneHandler}/>
                                        </div>

                                        <button className="btn btn-success" 
                                                onClick={this.saveCompanyManager}> Save</button>
                                        <button className="btn btn-danger" 
                                                onClick={this.cancel.bind(this)} 
                                                style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

CreateCompanyManagerComponent.propTypes = {
    addCompanyManager:PropTypes.func.isRequired,
    errors:PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    errors: state.errors
  });
export default connect(mapStateToProps, { addCompanyManager })(CreateCompanyManagerComponent);

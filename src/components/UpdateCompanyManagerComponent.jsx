import React, { Component } from 'react'
import CompanyManagerService from '../config/CompanyManagerService';
import {updateCompanyManagerDetails} from '../actions/actions'
import {connect} from 'react-redux'
class UpdateCompanyManagerComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            companyManagerId: this.props.match.params.companyManagerId,
            companyManagerName: '',
            companyManagerEmailId: '',
            companyManagerPhone:''
        }
        this.changeCompanyManagerNameHandler = this.changeCompanyManagerNameHandler.bind(this);
        this.changeCompanyManagerEmailHandler = this.changeCompanyManagerEmailHandler.bind(this);
        this.changeCompanyManagerPhoneHandler = this.changeCompanyManagerPhoneHandler.bind(this)
        this.updateCompanyManager = this.updateCompanyManager.bind(this);
    }

    componentDidMount(){
        CompanyManagerService.getManagerById(this.state.companyManagerId).then( (res) =>{
            let companymanager = res.data;
            this.setState({
                companyManagerName: companymanager.companyManagerName,
                companyManagerEmailId: companymanager.companyManagerEmailId,
                companyManagerPhone : companymanager.companyManagerPhone,
            });
        });
    }

    updateCompanyManager = (e) => {
        e.preventDefault();
        let companymanager = {companyManagerId:this.state.companyManagerId,
            companyManagerName: this.state.companyManagerName, 
            companyManagerEmailId: this.state.companyManagerEmailId, 
            companyManagerPhone: this.state.companyManagerPhone, 
        };
        console.log('companymanager => ' + JSON.stringify(companymanager));
        console.log('companyManagerId => ' + JSON.stringify(this.state.companyManagerId));
        this.props.updateCompanyManagerDetails(this.state.companyManagerId, companymanager);
        this.props.history.push('/CompanyManager');
    
    }
     
    changeCompanyManagerIdHandler= (event) => {
        this.setState({companyManagerId: this.props.match.params.companyManagerId});
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
                                <h3 className="text-center">Update Company Manager</h3>
                                <div className = "card-body">
                                    <form>
                                    <div className = "form-group">
                                            <label> Manager ID </label>
                                            <input placeholder="Unique Manager Id" 
                                                name="companyManagerId" className="form-control" 
                                                value={this.state.companyManagerId} 
                                                onChange={this.changeCompanyManagerIdHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Manager Name </label>
                                            <input placeholder="Company Name" 
                                                name="companyManagerName" className="form-control" 
                                                value={this.state.companyManagerName} 
                                                onChange={this.changeCompanyManagerNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Email ID </label>
                                            <input placeholder="Enter valid Email Id" 
                                                name="companyManagerEmailId" className="form-control" 
                                                value={this.state.companyManagerEmailId} 
                                                onChange={this.changeCompanyManagerEmailHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label>Phone Number</label>
                                            <input placeholder="Phone Number" 
                                                name="companyManagerPhone" className="form-control" 
                                                value={this.state.companyManagerPhone} 
                                                onChange={this.changeCompanyManagerPhoneHandler}/>
                                        </div>

                                        <button className="btn btn-success" 
                                            onClick={this.updateCompanyManager}>Save</button>
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


const mapStateToProps = (state) => {
    console.log('state'+state.getAddCompanyManager);
    return { data: state.getAddCompanyManager }
 }
    export default connect(mapStateToProps, {updateCompanyManagerDetails})(UpdateCompanyManagerComponent);
      
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addInvestor} from '../actions/actionsInvestor';
import PropTypes from "prop-types";
class CreateInvestorComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            investorId: '',
            investorName: '',
            investorPanNum:'',
            investorEmailId: '',
            investorPhone:'',
            noOfStocks:'',
            investorsInvestment:''
        }
        this.changeInvestorIdHandler = this.changeInvestorIdHandler.bind(this);
        this.changeInvestorNameHandler = this.changeInvestorNameHandler.bind(this);
        this.changeInvestorPanNumHandler = this.changeInvestorPanNumHandler.bind(this);
        this.changeInvestorEmailHandler = this.changeInvestorEmailHandler.bind(this);
        this.changeInvestorPhoneHandler = this.changeInvestorPhoneHandler.bind(this);
        this.changeNoOfStocksHandler = this.changeNoOfStocksHandler.bind(this);
        this.changeInvestmentHandler = this.changeInvestmentHandler.bind(this);
        this.saveInvestor = this.saveInvestor.bind(this);
    }

   
    saveInvestor = (e) => {
        e.preventDefault();
        let investor = {investorId: this.state.investorId, 
            investorName: this.state.investorName, 
            investorPanNum: this.state.investorPanNum,
            investorEmailId: this.state.investorEmailId,     
            investorPhone: this.state.investorPhone,
            noOfStocks: this.state.noOfStocks,
            investorsInvestment: this.state.investorsInvestment
        };
        console.log('Investor => ' + JSON.stringify(investor));
        this.props.addInvestor(investor);
        this.props.history.push("/Investor")
    }
    
        
    
    changeInvestorIdHandler= (event) => {
        this.setState({investorId: event.target.value});
    }

    changeInvestorNameHandler= (event) => {
        this.setState({investorName: event.target.value});
    }

    changeInvestorPanNumHandler= (event) => {
        this.setState({investorPanNum: event.target.value});
    }

    changeInvestorEmailHandler= (event) => {
        this.setState({investorEmailId: event.target.value});
    }

    changeInvestorPhoneHandler= (event) => {
        this.setState({investorPhone: event.target.value});
    }

    changeNoOfStocksHandler= (event) => {
        this.setState({noOfStocks: event.target.value});
    }

    changeInvestmentHandler= (event) => {
        this.setState({investorsInvestment: event.target.value});
    }

    cancel(){
        this.props.history.push('/Investor');
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
                                  <h3 className="text-center" >Add New Investor</h3>

                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Investor ID </label>
                                            <input placeholder="Unique Investor ID" 
                                                   name="investorId" className="form-control"
                                                   value={this.state.investorId} 
                                                   onChange={this.changeInvestorIdHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Investor Name </label>
                                            <input placeholder="Enter Investor Name" 
                                                   name="investorName" className="form-control" 
                                                   value={this.state.investorName} 
                                                   onChange={this.changeInvestorNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Pan Number </label>
                                            <input placeholder="Enter Investor Name" 
                                                   name="investorPanNum" className="form-control" 
                                                   value={this.state.investorPanNum} 
                                                   onChange={this.changeInvestorPanNumHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label>Email ID</label>
                                            <input placeholder="Enter valid Email Id" 
                                                   name="investorEmailId" className="form-control" 
                                                   value={this.state.investorEmailId} 
                                                   onChange={this.changeInvestorEmailHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label>Phone Number</label>
                                            <input placeholder="Phone Number" 
                                                   name="investorPhone" className="form-control" 
                                                   value={this.state.investorPhone} 
                                                   onChange={this.changeInvestorPhoneHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label>No Of Stocks</label>
                                            <input placeholder="Phone Number" 
                                                   name="noOfStocks" className="form-control" 
                                                   value={this.state.noOfStocks} 
                                                   onChange={this.changeNoOfStocksHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label>Total Investment Amount</label>
                                            <input placeholder="Phone Number" 
                                                   name="investorsInvestment" className="form-control" 
                                                   value={this.state.investorsInvestment} 
                                                   onChange={this.changeInvestmentHandler}/>
                                        </div>

                                        <button className="btn btn-success" 
                                                onClick={this.saveInvestor}> Save</button>
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

CreateInvestorComponent.propTypes = {
    addInvestor:PropTypes.func.isRequired,
    errors:PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    errors: state.errors
  });
export default connect(mapStateToProps, { addInvestor })(CreateInvestorComponent);

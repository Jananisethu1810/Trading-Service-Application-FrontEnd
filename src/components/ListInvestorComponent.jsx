import React, { Component } from 'react'
import {getAllInvestor, deleteInvestor} from '../actions/actionsInvestor'
import {connect} from 'react-redux'

class ListInvestorComponent extends Component {
    constructor(props) {
        
        super(props)

        this.state = {
                investors: []
        }

        this.addInvestor = this.addInvestor.bind(this);
        this.updateInvestor = this.updateInvestor.bind(this);
        this.deleteInvestor = this.deleteInvestor.bind(this);
    }


    deleteInvestor(investorId){
        this.props.deleteInvestor(investorId);
        this.props.history.push("/Investor")
    }
    updateInvestor(investorId){
        this.props.history.push(`/addInvestor/${investorId}`);
    }

    componentDidMount(){
        this.props.getAllInvestor();
    } 

    addInvestor(){
        this.props.history.push('/addInvestor');
    }

    render() {
        const investors=this.props.investor1;
        console.log(investors)
        return (
            
            <div>
                 <h1 className="text-center"  
                    style={{textAlign:'center', color:'#d64161', marginTop:'30px', fontFamily: 'sans-serif-medium'}}><b>Investors List</b></h1>
                 <div className = "row"  style={{fontFamily: 'sans-serif-medium'}}>
                    <button className="btn btn-primary" 
                            onClick={this.addInvestor} style={{fontSize:"20px"}}> Add Investor</button>
                 </div>
                 <br></br>
                 <div className = "row"  style={{fontFamily: 'sans-serif-medium'}}>
                        <table className = "table table-striped table-bordered table-success table-hover">

                        <thead class="thead-dark">
                                <tr style={{textAlign:'center'}}>
                                <th>Investor Id </th>
                                    <th>Investor Name </th>
                                    <th>Pan Number</th>
                                    <th>Email ID</th>
                                    <th> Phone </th>
                                    <th>No Of Stocks</th>
                                    <th>Total Investment</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    investors.map(
                                        investor => 
                                        <tr key = {investor.investorId}>
                                            <td> {investor.investorId} </td>   
                                            <td> { investor.investorName} </td>   
                                            <td> {investor.investorPanNum}</td>
                                            <td> {investor.investorEmailId}</td>
                                            <td> {investor.investorPhone}</td>
                                            <td>{investor.noOfStocks}</td>
                                            <td>{investor.investorsInvestment}</td>
                                            <td>
                                                 <button onClick={ () => this.updateInvestor(investor.investorId)} 
                                                        className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteInvestor(investor.investorId)} 
                                                        className="btn btn-danger">Delete </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
           
        )
    }
}
const mapStateToProps = (state) => {
    return { investor1: state.getListInvestor, data:state.getAddInvestor, deleted: state.getDeleteInvestor
     }
}
    
export default connect(mapStateToProps, { getAllInvestor, deleteInvestor})(ListInvestorComponent);


import React, { Component } from 'react'
import {getAllCompanyManager, deleteCompanyManager} from '../actions/actions'
import {connect} from 'react-redux'
 class ListCompanyManagerComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            companymanagers: []
    }
        this.addCompanyManager = this.addCompanyManager.bind(this);
        this.editCompanyManager = this.editCompanyManager.bind(this);
        this.deleteCompanyManager = this.deleteCompanyManager.bind(this);
    }
 
    deleteCompanyManager(companyManagerId){
        this.props.deleteCompanyManager(companyManagerId);
        this.props.history.push("/CompanyManager")
    }
    editCompanyManager(companyManagerId){
        this.props.history.push(`/update-companymanager/${companyManagerId}`);
    }

    componentDidMount(){
        this.props.getAllCompanyManager();
    }

    addCompanyManager(){
        this.props.history.push('/add-companymanager/_add');
    }

    render() {
        const companymanagers=this.props.companyManager1;
        console.log(companymanagers)
        return (
            <div>
                 <h1 className="text-center" 
                     style={{textAlign:'center', color:'#d64161', marginTop:'30px', fontFamily: 'sans-serif-medium'}}>
                     <b>Managers List</b></h1>
                 <div className = "row" style={{fontFamily: 'sans-serif-medium'}}>
                    <button className="btn btn-primary" 
                            onClick={this.addCompanyManager} 
                            style={{fontSize:"20px"}} > Add Company Manager</button>
                 </div>
                 <br></br>
                 <div className = "row" style={{fontFamily: 'sans-serif-light', fontSize:"17px"}}>
                        <table className = "table table-striped table-bordered table-success table-hover">

                            <thead class="thead-dark">
                                <tr style={{textAlign:'center'}}>
                                    <th>Manager Id</th>
                                    <th>Manager Name</th>
                                    <th>Email Id</th>
                                    <th>Phone</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {    
                                    companymanagers.map(
                                        companymanager => 
                                        <tr key = {companymanager.companyManagerId}>
                                             <td> {companymanager.companyManagerId } </td>   
                                             <td> {companymanager.companyManagerName}</td>
                                             <td> {companymanager.companyManagerEmailId}</td>
                                             <td> {companymanager.companyManagerPhone}</td>
                                             <td>
                                                 <button onClick={ () => this.editCompanyManager(companymanager.companyManagerId)} 
                                                         className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} 
                                                        onClick={ () => this.deleteCompanyManager(companymanager.companyManagerId)} 
                                                        className="btn btn-danger"> Delete </button>
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
    return { companyManager1: state.getListManager, data:state.getUpdateManager, deleted:state.getDeleteManager
     }
}
    
export default connect(mapStateToProps, {getAllCompanyManager, deleteCompanyManager})(ListCompanyManagerComponent);
import { combineReducers } from 'redux';
import addManager from './addManagerReducer';
import getManager from './getManagerReducer';
import updateManager from './updateManagerReducer';
import deleteManager from './deleteManagerReducer';
import getInvestor from './getInvestorReducer';
import updateInvestor  from './updateInvestorReducer';
import addInvestor from './addInvestorReducer';
import investorDelete from './deleteInvestorReducer';
 
 const rootReducer = combineReducers({
    getListManager: getManager,
    getUpdateManager:updateManager,
    getAddCompanyManager:addManager,
    getDeleteManager:deleteManager,

    getListInvestor: getInvestor,
    getUpdateInvestor: updateInvestor,
    getAddInvestor: addInvestor,
    getDeleteInvestor: investorDelete
 });
 
 export default rootReducer;
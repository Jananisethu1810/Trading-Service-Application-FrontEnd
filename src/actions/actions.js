import { GET_ALL_COMPANYMANAGER, GET_UPDATED_COMPANYMANAGER, COMPANYMANAGER_ADDED, GET_DELETED_COMPANYMANAGER, ERROR_MESSAGE} from '../actiontypes/actiontypes';
import CompanyManagerService from '../config/CompanyManagerService'
import history from '../history'
export const addCompanyManager=(companymanager)=>{
    return dispatch=>{
        return CompanyManagerService.createManager(companymanager).then((response)=>{
            dispatch({type:COMPANYMANAGER_ADDED, payload:response.data});
            CompanyManagerService.getAllManagers().then((response) => {
                console.log(response.data);
                dispatch({ type: GET_ALL_COMPANYMANAGER, payload: response.data });
            })
            history.push("/CompanyManager")
        }).catch((res)=>{
            dispatch({type:ERROR_MESSAGE, payload:res.data})
        })
    }
    }
    export const getAllCompanyManager = () => {
        return dispatch => {
            return CompanyManagerService.getAllManagers().then((response) => {
                console.log(response.data);
                dispatch({ type: GET_ALL_COMPANYMANAGER, payload: response.data });
            }).catch((res)=>{
                dispatch({type:ERROR_MESSAGE, payload:res.data})
            })
        }
    }
    
export const deleteCompanyManager=(companyManagerId)=>{
    return dispatch=>{
        return CompanyManagerService.deleteManager(companyManagerId).then((response)=>{
            dispatch({type:GET_DELETED_COMPANYMANAGER, payload:response.data})
            CompanyManagerService.getAllManagers().then((response) => {
                console.log(response.data);
                dispatch({ type: GET_ALL_COMPANYMANAGER, payload: response.data });
            })
            history.push("/CompanyManager")
        }).catch((res)=>{
            dispatch({type:ERROR_MESSAGE, payload:res.data})
        })
    }
}
export const updateCompanyManagerDetails=(companyManagerId,companymanager)=>{
    return dispatch=>{
        return CompanyManagerService.updateManager(companyManagerId,companymanager).then((response)=>{
            dispatch({type:GET_UPDATED_COMPANYMANAGER, payload:response.data});
            CompanyManagerService.getAllManagers().then((response) => {
               console.log(response.data);
               dispatch({ type: GET_UPDATED_COMPANYMANAGER, payload: response.data });
               
           })
        }).catch((res)=>{
           dispatch({type:ERROR_MESSAGE, payload:'Enter correct data'})
       })
    }
}
            

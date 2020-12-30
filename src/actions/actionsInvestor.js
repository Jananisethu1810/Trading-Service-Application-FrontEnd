import { GET_ALL_INVESTOR, GET_UPDATED_INVESTOR, INVESTOR_ADDED, GET_DELETED_INVESTOR, ERROR_MESSAGE} from '../actiontypes/actiontypes';
import InvestorService from '../config/InvestorService'
import history from '../history'
export const addInvestor=(investor)=>{
    return dispatch=>{
        return InvestorService.createInvestorService(investor).then((response)=>{
            dispatch({type:INVESTOR_ADDED,payload:response.data});
            InvestorService.getAllInvestorService().then((response) => {
                console.log(response.data);
                dispatch({ type: GET_ALL_INVESTOR, payload: response.data });
            })
            history.push("/Investor")
        }).catch((res)=>{
            dispatch({type:ERROR_MESSAGE, payload:res.data})
        })
    }
    }
    export const getAllInvestor = () => {
        return dispatch => {
            return InvestorService.getAllInvestorService().then((response) => {
                console.log(response.data);
                dispatch({ type: GET_ALL_INVESTOR, payload: response.data });
            }).catch((res)=>{
                dispatch({type:ERROR_MESSAGE, payload:res.data})
            })
        }
    }
    
 export const deleteInvestor=(investorId)=>{
    return dispatch=>{
        return InvestorService.deleteInvestorService(investorId).then((response)=>{
            dispatch({type:GET_DELETED_INVESTOR,payload:response.data})
            InvestorService.getAllInvestorService().then((response) => {
                console.log(response.data);
                dispatch({ type: GET_ALL_INVESTOR, payload: response.data });
            })
            history.push("/Investor")
        }).catch((res)=>{
            dispatch({type:ERROR_MESSAGE,payload:res.data})
        })
    }
}
export const updateInvestorDetails=(investorId, investor)=>{
    return dispatch=>{
        return InvestorService.updateManager(investorId, investor).then((response)=>{
            dispatch({type:GET_UPDATED_INVESTOR, payload:response.data});
            InvestorService.getAllInvestorService().then((response) => {
               console.log(response.data);
               dispatch({ type: GET_UPDATED_INVESTOR, payload: response.data });
               
           })
        }).catch((res)=>{
           dispatch({type:ERROR_MESSAGE, payload:'Enter correct data'})
       })
    }
}

let initState={manager:null, error:null}
const addManager= (state = initState, action) => {
 
    switch (action.type) {
    case 'COMPANYMANAGER_ADDED':
        return {...state, manager:action.payload, error:null}
    case 'ERROR_MESSAGE':
        return {...state, manager:null, error:action.payload}
   
    
    default:
    return state;
    }
    }
    export default addManager;
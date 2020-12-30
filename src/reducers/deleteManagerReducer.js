const deleteManager = (state = [], action) => {
 
    switch (action.type) {
    case 'GET_DELETED_COMPANYMANAGER':
        console.log(action.payload)
    return action.payload;
    
    case 'ERROR_MESSAGE':
        return {...state};
    
    default:
    return state;
    }
    }
    export default deleteManager;
   
const getManager = (state = [], action) => {
 
    switch (action.type) {
    case 'GET_ALL_COMPANYMANAGER':
         return action.payload
    case 'ERROR_MESSAGE':
        return {...state};

    default:
    return state;
    }
    }
    export default getManager;
   
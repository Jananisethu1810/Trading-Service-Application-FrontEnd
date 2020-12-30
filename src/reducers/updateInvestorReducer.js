const updateInvestor = (state = [], action) => {
 
    switch (action.type) {
    case 'GET_UPDATED_INVESTOR':
        console.log(action.payload)
    return action.payload;
    case 'ERROR_MESSAGE':
        console.log(action.payload)
        
        return [...state];

    default:
    return state;
    }
    }
    export default updateInvestor;
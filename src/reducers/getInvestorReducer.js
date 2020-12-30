const getInvestor = (state = [], action) => {
 
    switch (action.type) {
    case 'GET_ALL_INVESTOR':
        console.log(action.payload)
    return action.payload;
    case 'ERROR_MESSAGE':
        return [];

    default:
    return state;
    }
    }
    export default getInvestor;
   
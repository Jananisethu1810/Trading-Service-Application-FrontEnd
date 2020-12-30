let initState={investor:null, error:null}
const addInvestor = (state = initState, action) => {
 
    switch (action.type) {
    case 'INVESTOR_ADDED':
        return {...state, investor:action.payload, error:null}
    case 'ERROR_MESSAGE':
        return {...state, investor:null, error:action.payload}
   
    
    default:
    return state;
    }
    }
    export default addInvestor;
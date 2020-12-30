import axios from 'axios';

const INVESTOR_API_BASE_URL = "http://localhost:8088/trading/Investor";

class InvestorService {

    getAllInvestorService(){
        return axios.get(INVESTOR_API_BASE_URL);
    }

    createInvestorService(investor){
        return axios.post(INVESTOR_API_BASE_URL, investor);
    }

    getInvestorByIdService(investorId){
        return axios.get(INVESTOR_API_BASE_URL + '/' + investorId);
    }

    updateInvestorService(investor, investorId){
        return axios.put(INVESTOR_API_BASE_URL + '/' + investorId, investor);
    }

    deleteInvestorService(investorId){
        return axios.delete(INVESTOR_API_BASE_URL + '/' + investorId);
    }
}

export default new InvestorService();
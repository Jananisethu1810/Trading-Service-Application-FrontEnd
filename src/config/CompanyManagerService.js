import axios from 'axios';

const COMPANYMANAGER_API_BASE_URL = "http://localhost:8088/trading/CompanyManager";

class CompanyManagerService {

    getAllManagers(){
        return axios.get(COMPANYMANAGER_API_BASE_URL);
    }

    createManager(companymanager){
        return axios.post(COMPANYMANAGER_API_BASE_URL, companymanager);
    }

    getManagerById(companyManagerId){
        return axios.get(COMPANYMANAGER_API_BASE_URL + '/' + companyManagerId);
    }

    updateManager(companyManagerId, companymanager){
        return axios.put(COMPANYMANAGER_API_BASE_URL + '/' + companyManagerId, companymanager);
    }

    deleteManager(companyManagerId){
        return axios.delete(COMPANYMANAGER_API_BASE_URL + '/' + companyManagerId);
    }
}

export default new CompanyManagerService()
import axios from 'axios';

const EMPLOYEE_SERVICE_BASE_URL = "http://localhost:8090/api/v1";

class ClientService {

    getClients() {
        return axios.get(EMPLOYEE_SERVICE_BASE_URL + "/clients/");
    }

    addClient(client) {
        return axios.post(EMPLOYEE_SERVICE_BASE_URL + "/clients/add/", client)
    }

    updateClient(client, id) {
        return axios.put(EMPLOYEE_SERVICE_BASE_URL + "/clients/id/" + id, client)
    }
    deleteClient (id){
        return axios.delete(EMPLOYEE_SERVICE_BASE_URL + "/clients/id/" + id)
    }
}

export default new ClientService();
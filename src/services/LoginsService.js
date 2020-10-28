import axios from 'axios';

const EMPLOYEE_SERVICE_BASE_URL = "http://localhost:8090/api/v1";

class LoginsService {
    login(user) {
        return axios.post(EMPLOYEE_SERVICE_BASE_URL + "/users/login", user)
    }

}

export default new LoginsService();
import axios from 'axios'

const gitHubUser = "lucasramallo"
export class ApiService {
    getApi() {
        return axios.get(`https://api.github.com/users/${gitHubUser}`)
        .then(res => res.data);
    }
}

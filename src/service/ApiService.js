import axios from 'axios'

export class ApiService {

    getApi() {
        return axios.get('https://api.github.com/users/lucasramallo')
        .then(res => res.data);
    }
}

import axios from 'axios';

const BackendApiMainService = {
    async getMainData(page) {
        return axios.get(`https://pokeapi.co/api/v2/pokemon?limit=21&offset=${page}`)
    },
}

export default BackendApiMainService;
const axios = require('axios');

const { MAPBOX_API_URL, MAPBOX_API_KEY } = require('../utils/secrets');

class Search {
    historical = ['Tegucigalpa', 'Madrid', 'San José', 'Bogotá'];

    constructor() {
        // TODO: Read DB if exists
    }

    get paramsMapbox() {
        return {
            access_token: MAPBOX_API_KEY,
            limit: 5,
            language: 'es',
        };
    }

    async searchCity(place = '') {
        // HTTP request
        try {
            const instance = axios.create({
                baseURL: `${MAPBOX_API_URL}/mapbox.places/${place}.json`,
                params: this.paramsMapbox,
            });
            const { data } = await instance.get();
            console.log(data);
            return [];
        } catch (error) {
            console.error(`Error to get city: ${error}`);
            return [];
        }
    }
}

module.exports = Search;

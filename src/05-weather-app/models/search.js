const fs = require('fs');

const axios = require('axios');

const { capitalize } = require('../utils/formatter');

const {
    MAPBOX_API_URL,
    MAPBOX_API_KEY,
    OPEN_WEATHER_API_URL,
    OPEN_WEATHER_API_KEY,
} = require('../utils/secrets');

class Search {
    historical = [];
    dbPath = './db/database.json';

    constructor() {
        // TODO: Read DB if exists
        this.readDB();
    }

    get capitalizedHistorical() {
        return this.historical.map((place) => capitalize(place));
    }

    get paramsMapbox() {
        return {
            access_token: MAPBOX_API_KEY,
            limit: 5,
            language: 'es',
        };
    }

    get paramsOpenWeatherMap() {
        return {
            appid: OPEN_WEATHER_API_KEY,
            units: 'metric',
            lang: 'es',
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

            return data.features.map((place) => ({
                id: place.id,
                name: place.place_name,
                lng: place.center[0],
                lat: place.center[1],
            }));
        } catch (error) {
            console.error(`Error to get city: ${error}`);
            return [];
        }
    }

    async searchPlaceWeather(lat, lon) {
        try {
            const instance = axios.create({
                baseURL: `${OPEN_WEATHER_API_URL}/weather`,
                params: { ...this.paramsOpenWeatherMap, lat, lon },
            });

            const { data } = await instance.get();

            const { weather, main } = data;

            return {
                desc: weather[0].description,
                min: main.temp_min,
                max: main.temp_max,
                temp: main.temp,
            };
        } catch (error) {
            console.error(`Error to get place weather: ${error}`);
        }
    }

    addHistorical(place = '') {
        if (this.historical.includes(place.toLowerCase())) return;
        this.historical = this.historical.splice(0, 5);

        this.historical.unshift(place.toLocaleLowerCase());

        // Save in DB
        this.saveDB();
    }

    saveDB() {
        const payload = {
            historical: this.historical,
        };
        fs.writeFileSync(this.dbPath, JSON.stringify(payload));
    }

    readDB() {
        if (!fs.existsSync(this.dbPath)) return;
        const info = fs.readFileSync(this.dbPath, { encoding: 'utf-8' });
        const data = JSON.parse(info);
        this.historical = data.historical;
    }
}

module.exports = Search;

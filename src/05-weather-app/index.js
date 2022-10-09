require('dotenv').config();

const { inquireMenu, pause, readInput, listPlaces } = require('./helpers/inquirer');
const Search = require('./models/search');

const main = async () => {
    let opt = null;

    const search = new Search();

    do {
        opt = await inquireMenu();

        switch (opt) {
            case 1: // Search a city
                // Show message
                const city = await readInput('City: ');

                // Search places
                const places = await search.searchCity(city);

                // Select place
                const placeId = await listPlaces(places);
                const selectedPlace = places.find((place) => (place.id = placeId));

                // Weather
                const weather = await search.searchPlaceWeather(
                    selectedPlace.lat,
                    selectedPlace.lng
                );

                // Show results
                console.clear();
                console.log('\nCity info\n'.green);
                console.log('City:', selectedPlace.name.green);
                console.log('Latitude:', selectedPlace.lat);
                console.log('Longitude:', selectedPlace.lng);
                console.log('Temperature:', weather.temp);
                console.log('Min:', weather.min);
                console.log('Max:', weather.max);
                console.log('Description:', weather.desc.green);

                break;
            case 2: // List historical search
                console.log('Option 2');
                break;
        }

        if (opt !== 0) await pause();
    } while (opt !== 0);
};

main();

require('dotenv').config();

const { inquireMenu, pause, readInput } = require('./helpers/inquirer');
const Search = require('./models/search');

const main = async () => {
    let opt = null;

    const search = new Search();

    do {
        opt = await inquireMenu();

        switch (opt) {
            case 1: // Search a city
                // Show message
                const place = await readInput('City: ');
                console.log(place);

                // Search places
                await search.searchCity(place);

                // Select place

                // Weather

                // Show results
                console.log('\nCity info\n'.green);
                console.log('City: ');
                console.log('Latitude: ');
                console.log('Longitude: ');
                console.log('Temperature: ');
                console.log('Min: ');
                console.log('Max: ');

                break;
            case 2: // List historical search
                console.log('Option 2');
                break;
        }

        if (opt !== 0) await pause();
    } while (opt !== 0);
};

main();

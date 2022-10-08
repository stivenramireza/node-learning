const deadpool = {
    name: 'Wade',
    lastName: 'Winston',
    power: 'Regeneration',
    age: 50,
    getName() {
        return `${this.name} ${this.lastName} ${this.power}`;
    },
};

// const name = deadpool.name;
// const lastName = deadpool.lastName;
// const power = deadpool.power;

function printHero({ name, lastName, power, age = 0 }) {
    name = 'Stiven';
    console.log(name, lastName, power, age);
}

// printHero(deadpool);

const heros = ['Deadpool', 'Superman', 'Batman'];

// const h1 = heros[0];
// const h2 = heros[1];
// const h3 = heros[2];

const [, , h3] = heros;

console.log(h3);

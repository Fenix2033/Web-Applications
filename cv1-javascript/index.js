console.log('Logs');
console.log('-----------');

console.log("Ahoj svete!");
console.error("Chyba!");


// -------------------------
console.log('');
console.log('Variables');
console.log('-----------');

const cannotBeChanged = 1;
// cannotBeChanged = 2;
console.log(cannotBeChanged);

let canBeChanged = 100;
canBeChanged = 200;
canBeChanged++;
console.log(canBeChanged);

const name = "Ivo";
console.log(name);

const stringLiteral = `Ahoj ${name}`;
console.log(stringLiteral);

const object = {
    name: "Ivo",
    height: 184,
};
console.log(object);

const emptyArray = [];
const array = [1, 2, 10];
const arrayOfObjects = [
    {
        name: "Ivo",
        height: 184,
    },
    {
        name: "Jan",
        height: 190,
    },
];
console.log(arrayOfObjects);


// -------------------------
console.log('');
console.log('Conditions');
console.log('-----------');

if (name === "Ivo") {
    console.log("Jsem Ivo");
} else {
    console.log("Nejsem Ivo");
}

console.log(name === "Ivo" ? "Jsem Ivo" : "Nejsem Ivo");


// -------------------------
console.log('');
console.log('Loops');
console.log('-----------');

let i = 0;
while (i < array.length) {
    console.log(array[i]);
    i++;
}

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

for (const item of array) {
    console.log(item);
}

// -------------------------
console.log('');
console.log('Functions');
console.log('-----------');

function add(a, b) {
    return a + b;
}

const subtract = (a, b) => { return a - b; };
const multiply = (a, b) => a * b;
const powerOfTwo = a => a * a;

console.log('5 + 3 =', add(5, 3));
console.log('10 - 6 =', subtract(10, 6));
console.log('2 * 6 =', multiply(2, 6));
console.log('4 ^ 2 = ', powerOfTwo(4));


// -------------------------
console.log('');
console.log('Working with arrays');
console.log('-----------');

const ivo = arrayOfObjects.find(person => person.name === "Ivo");
const tallPersons = arrayOfObjects.filter(person => person.height > 180);
const heights = arrayOfObjects.map(person => person.height);

console.log('This is me:', ivo);
console.log('All tall persons:', tallPersons);
console.log('Heights of all persons:', heights);
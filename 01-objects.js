// una variable que contiene mas datos

// pares de propiedades y valores

// las propiedades pueden tener mas objetos

// no tienen un orden concreto

const myObject = {
    name: "Laura",
    surname: "Martínez",
    age: 29,
    address: {
        street: "Pamplona",
        number: 96
    },
    hobbies: ["Chocolate", "Running", "Gaming"]
}

// acceder a los datos dentro del objeto
console.log(myObject.surname); // DOT notation
console.log(myObject["hobbies"][1]); // square bracket notation

console.log(myObject.hobbies[1]); // lo mismo con DOT notation

// nombre de la calle:

console.log(myObject.address.street); // accedemos a un objeto dentro de otro objeto

console.log(myObject["address"]["street"]); // lo mismo

let nameOfProperty = "";

// cuando me llega la info de lo que un usuario quiere
nameOfProperty = "address"

console.log(myObject[nameOfProperty]);
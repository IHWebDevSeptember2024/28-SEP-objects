const myArray = [2,32,32]
const anotherArray = [2]

if(myArray === anotherArray){ // esto siempre es false
    console.log("Son iguales");
    return null;
}

myArray.push(10)

console.log(myArray);
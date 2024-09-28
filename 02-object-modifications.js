const pokemon = {
  name: "Pikachu",
  type: "Electric",
  level: 25,
  abilities: ["Static", "Lightning Rod"],
  stats: {
    hp: 35,
    attack: 55,
    defense: 40,
    specialAttack: 50,
    specialDefense: 50,
    speed: 90,
  },
  moves: [
    { name: "Thunder Shock", type: "Electric", power: 40, accuracy: 100 },
    { name: "Quick Attack", type: "Normal", power: 40, accuracy: 100 },
    { name: "Iron Tail", type: "Steel", power: 100, accuracy: 75 },
    { name: "Electro Ball", type: "Electric", power: "Varies", accuracy: 100 },
  ],
  evolution: "Raichu",
  region: "Kanto",
  isLegendary: false,
};

pokemon.name = "Lo que sea"; // modificamos el valor de la propiedad

pokemon["name"] = "Diria que sí";

// console.log(pokemon);

// eliminar una propiedad
delete pokemon.name;

// console.log(pokemon);

// ahora quiero añadir la propiedad name, soy un poco indeciso

pokemon.name = "Lo que sea"

// console.log(pokemon);

// Comprobar si existe una propiedad en concreto
console.log(`Existe la propiedad "owner" en mi objeto? ${"owner" in pokemon}`);

// Quiero ver todas las propiedades de mi objeto
console.log(Object.keys(pokemon));

// hacer loops en objetos
for (patata in pokemon){
    console.log(`Ahora el nombre de la propiedad es: ${"patata"}`);
    console.log(pokemon.patata);
}
const students = [
  {
    name: "Alice",
    age: 24,
    bootcamp: "Web Development",
    isLookingForJob: true,
  },
  {
    name: "Bob",
    age: 30,
    bootcamp: "Data Science",
    isLookingForJob: false,
  },
  {
    name: "Charlie",
    age: 28,
    bootcamp: "UX/UI Design",
    isLookingForJob: true,
  },
  {
    name: "Diana",
    age: 22,
    bootcamp: "Cybersecurity",
    isLookingForJob: false,
  },
];

// console.log(students);

// añadimos una nueva propiedad a TODOS los objetos dentro del array
students.forEach(function (student) {
  student.hobbies = [];
  console.log(student);
});

students[0].hobbies.push("Chocolate");

console.log(students);

// // Fuente: https://github.com/imcodingideas/map-filter-reduce-exercises/blob/master/zoo

// const zoo = {
//   animals: [
//     {
//       id: "0938aa23-f153-4937-9f88-4858b24d6bce",
//       name: "lions",
//       popularity: 4,
//       location: "NE",
//       residents: [
//         {
//           name: "Zena",
//           sex: "female",
//           age: 12,
//         },
//         {
//           name: "Maxwell",
//           sex: "male",
//           age: 15,
//         },
//         {
//           name: "Faustino",
//           sex: "male",
//           age: 7,
//         },
//         {
//           name: "Dee",
//           sex: "female",
//           age: 14,
//         },
//       ],
//     },
//     {
//       id: "e8481c1d-42ea-4610-8e11-1752cfc05a46",
//       name: "tigers",
//       popularity: 5,
//       location: "NW",
//       residents: [
//         {
//           name: "Shu",
//           sex: "female",
//           age: 19,
//         },
//         {
//           name: "Esther",
//           sex: "female",
//           age: 17,
//         },
//       ],
//     },
//     {
//       id: "baa6e93a-f295-44e7-8f70-2bcdc6f6948d",
//       name: "bears",
//       popularity: 5,
//       location: "NW",
//       residents: [
//         {
//           name: "Hiram",
//           sex: "male",
//           age: 4,
//         },
//         {
//           name: "Edwardo",
//           sex: "male",
//           age: 4,
//         },
//         {
//           name: "Milan",
//           sex: "male",
//           age: 4,
//         },
//       ],
//     },
//     {
//       id: "ef3778eb-2844-4c7c-b66c-f432073e1c6b",
//       name: "penguins",
//       popularity: 4,
//       location: "SE",
//       residents: [
//         {
//           name: "Joe",
//           sex: "male",
//           age: 10,
//         },
//         {
//           name: "Tad",
//           sex: "male",
//           age: 12,
//         },
//         {
//           name: "Keri",
//           sex: "female",
//           age: 2,
//         },
//         {
//           name: "Nicholas",
//           sex: "male",
//           age: 2,
//         },
//       ],
//     },
//     {
//       id: "533bebf3-6bbe-41d8-9cdf-46f7d13b62ae",
//       name: "otters",
//       popularity: 4,
//       location: "SE",
//       residents: [
//         {
//           name: "Neville",
//           sex: "male",
//           age: 9,
//         },
//         {
//           name: "Lloyd",
//           sex: "male",
//           age: 8,
//         },
//         {
//           name: "Mercedes",
//           sex: "female",
//           age: 9,
//         },
//         {
//           name: "Margherita",
//           sex: "female",
//           age: 10,
//         },
//       ],
//     },
//     {
//       id: "89be95b3-47e4-4c5b-b687-1fabf2afa274",
//       name: "frogs",
//       popularity: 2,
//       location: "SW",
//       residents: [
//         {
//           name: "Cathey",
//           sex: "female",
//           age: 3,
//         },
//         {
//           name: "Annice",
//           sex: "female",
//           age: 2,
//         },
//       ],
//     },
//     {
//       id: "78460a91-f4da-4dea-a469-86fd2b8ccc84",
//       name: "snakes",
//       popularity: 3,
//       location: "SW",
//       residents: [
//         {
//           name: "Paulette",
//           sex: "female",
//           age: 5,
//         },
//         {
//           name: "Bill",
//           sex: "male",
//           age: 6,
//         },
//       ],
//     },
//     {
//       id: "bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5",
//       name: "elephants",
//       popularity: 5,
//       location: "NW",
//       residents: [
//         {
//           name: "Ilana",
//           sex: "female",
//           age: 11,
//         },
//         {
//           name: "Orval",
//           sex: "male",
//           age: 15,
//         },
//         {
//           name: "Bea",
//           sex: "female",
//           age: 12,
//         },
//         {
//           name: "Jefferson",
//           sex: "male",
//           age: 4,
//         },
//       ],
//     },
//     {
//       id: "01422318-ca2d-46b8-b66c-3e9e188244ed",
//       name: "giraffes",
//       popularity: 4,
//       location: "NE",
//       residents: [
//         {
//           name: "Gracia",
//           sex: "female",
//           age: 11,
//         },
//         {
//           name: "Antone",
//           sex: "male",
//           age: 9,
//         },
//         {
//           name: "Vicky",
//           sex: "female",
//           age: 12,
//         },
//         {
//           name: "Clay",
//           sex: "male",
//           age: 4,
//         },
//         {
//           name: "Arron",
//           sex: "male",
//           age: 7,
//         },
//         {
//           name: "Bernard",
//           sex: "male",
//           age: 6,
//         },
//       ],
//     },
//   ],
//   employees: [
//     {
//       id: "c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1",
//       firstName: "Nigel",
//       lastName: "Nelson",
//       managers: [
//         "0e7b460e-acf4-4e17-bcb3-ee472265db83",
//         "fdb2543b-5662-46a7-badc-93d960fdc0a8",
//       ],
//       responsibleFor: [
//         "0938aa23-f153-4937-9f88-4858b24d6bce",
//         "e8481c1d-42ea-4610-8e11-1752cfc05a46",
//       ],
//     },
//     {
//       id: "0e7b460e-acf4-4e17-bcb3-ee472265db83",
//       firstName: "Burl",
//       lastName: "Bethea",
//       managers: ["9e7d4524-363c-416a-8759-8aa7e50c0992"],
//       responsibleFor: [
//         "0938aa23-f153-4937-9f88-4858b24d6bce",
//         "e8481c1d-42ea-4610-8e11-1752cfc05a46",
//         "baa6e93a-f295-44e7-8f70-2bcdc6f6948d",
//         "ef3778eb-2844-4c7c-b66c-f432073e1c6b",
//       ],
//     },
//     {
//       id: "fdb2543b-5662-46a7-badc-93d960fdc0a8",
//       firstName: "Ola",
//       lastName: "Orloff",
//       managers: ["9e7d4524-363c-416a-8759-8aa7e50c0992"],
//       responsibleFor: [
//         "533bebf3-6bbe-41d8-9cdf-46f7d13b62ae",
//         "89be95b3-47e4-4c5b-b687-1fabf2afa274",
//         "78460a91-f4da-4dea-a469-86fd2b8ccc84",
//         "bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5",
//       ],
//     },
//     {
//       id: "56d43ba3-a5a7-40f6-8dd7-cbb05082383f",
//       firstName: "Wilburn",
//       lastName: "Wishart",
//       managers: [
//         "0e7b460e-acf4-4e17-bcb3-ee472265db83",
//         "fdb2543b-5662-46a7-badc-93d960fdc0a8",
//       ],
//       responsibleFor: [
//         "78460a91-f4da-4dea-a469-86fd2b8ccc84",
//         "bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5",
//       ],
//     },
//     {
//       id: "9e7d4524-363c-416a-8759-8aa7e50c0992",
//       firstName: "Stephanie",
//       lastName: "Strauss",
//       managers: [],
//       responsibleFor: ["01422318-ca2d-46b8-b66c-3e9e188244ed"],
//     },
//     {
//       id: "4b40a139-d4dc-4f09-822d-ec25e819a5ad",
//       firstName: "Sharonda",
//       lastName: "Spry",
//       managers: [
//         "0e7b460e-acf4-4e17-bcb3-ee472265db83",
//         "fdb2543b-5662-46a7-badc-93d960fdc0a8",
//       ],
//       responsibleFor: [
//         "533bebf3-6bbe-41d8-9cdf-46f7d13b62ae",
//         "89be95b3-47e4-4c5b-b687-1fabf2afa274",
//       ],
//     },
//     {
//       id: "c1f50212-35a6-4ecd-8223-f835538526c2",
//       firstName: "Ardith",
//       lastName: "Azevado",
//       managers: ["b0dc644a-5335-489b-8a2c-4e086c7819a2"],
//       responsibleFor: [
//         "e8481c1d-42ea-4610-8e11-1752cfc05a46",
//         "baa6e93a-f295-44e7-8f70-2bcdc6f6948d",
//       ],
//     },
//     {
//       id: "b0dc644a-5335-489b-8a2c-4e086c7819a2",
//       firstName: "Emery",
//       lastName: "Elser",
//       managers: ["9e7d4524-363c-416a-8759-8aa7e50c0992"],
//       responsibleFor: [
//         "bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5",
//         "baa6e93a-f295-44e7-8f70-2bcdc6f6948d",
//         "0938aa23-f153-4937-9f88-4858b24d6bce",
//       ],
//     },
//   ],
//   hours: {
//     Tuesday: { open: 8, close: 18 },
//     Wednesday: { open: 8, close: 18 },
//     Thursday: { open: 10, close: 20 },
//     Friday: { open: 10, close: 20 },
//     Saturday: { open: 8, close: 22 },
//     Sunday: { open: 8, close: 20 },
//     Monday: { open: 0, close: 0 },
//   },
//   prices: { Adult: 49.99, Senior: 24.99, Child: 20.99 },
// };

// /* Contar número de animales */
// const numeroAnimales = zoo.animals.reduce(function (acc, especie) {
//   return acc + especie.residents.length;
// }, 0);

// /* Horario en formato humano */
// const schedule = {};
// Object.keys(zoo.hours).forEach(function (day) {
//   let message;
//   if (zoo.hours[day].open === 0 && zoo.hours[day].close === 0) {
//     message = "CLOSED";
//   } else {
//     message = `Open from ${zoo.hours[day].open}am until ${zoo.hours[day].close}pm`;
//   }
//   schedule[day] = message;
// });

// /* Buscador de empleados por id */
// const getEmployee = (id) => {
//   return zoo.employees.find(function (employee) {
//     // comparar id
//     return employee.id === id;
//   });
// };

// const getEmployeeOneLine = (id) => {
//   return zoo.employees.find((employee) => employee.id === id);
// };

// // Recomendación de Clean Code
// const getEmployeeCleanCode = (id) => {
//   const employeeChecker = function (employee) {
//     return employee.id === id;
//   };
//   return zoo.employees.find(employeeChecker);
// };

// /* Buscador de empleados por array id */
// const getEmployees = (ids) => {
//   return zoo.employees.filter((employee) => ids.includes(employee.id));
// };

// /* Qué animales cuida cada empleado */
// const employeeCoverage = () => {
//   const ret = {};
//   zoo.employees.forEach((employee) => {
//     //const key = employee.firstName + " " + employee.lastName;
//     const key = `${employee.firstName} ${employee.lastName}`;
//     // Animales que cuida el empleado: employee.responsibleFor
//     // Animales del zoo: zoo.animals

//     /* Opción Fácil */
//     const animals = [];
//     zoo.animals.forEach((animal) => {
//       if (employee.responsibleFor.includes(animal.id)) {
//         animals.push(animal.name);
//       }
//     });
//     /* Opción encadenar métodos de array
//     const animals = zoo.animals
//     	.filter(animal => employee.responsibleFor.includes(animal.id))
//     	.map(animal => animal.name);
//     */
//     /* Opción arturo => transformar array de ids en array de nombres
//     const animals = employee.responsibleFor.map(id => {
//       return zoo.animals.find(animal => animal.id === id).name;
//     })
//     */
//     ret[key] = animals;
//   });
//   return ret;
// };

// // console.log(employeeCoverage());

// // Nombre de managers por id de empleado
// const getManagers = (employeeId) => {
//   const employee = getEmployee(employeeId);
//   return getEmployees(employee.managers);
// };

// const getManagersOneLine = (employeeId) =>
//   getEmployees(getEmployee(employeeId).managers);

// console.log(getManagers("c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1"));

// //funcionalidad Set
// //vídeo de carlos azaustre https://www.youtube.com/watch?v=5yPf74sCu2k
// postMessage.reduce((allTags, post) => {
//   return Array.from(new Set([...allTags, ...post.tags]));
// }, []);

// //https://www.jschallenger.com/javascript-fundamentals/javascript-objects/check-object-has-property-javascript
// // Write a function that takes arguments an arbitrary number of arrays
// // // It should return an array containing the values of all arrays
// // function myFunction(...arrays) {
// //   const result = [];
// //   for (let i = 0; i < arrays.length; i++) {
// //     arrays[i].forEach((element) => {
// //       result.push(element); // push the array
// //     });
// //   }
// //   return result;
// // }

// // myFunction([1, 2, 3], [4, 5, 6]);

// // myFunction(["a", "b", "c"], [4, 5, 6]);

//Me quiere, no me quiere
//devolver si me quiere o no me quiere
function Margarita(petalos) {
  return petalos % 2 === 0 ? "Me quiere" : "No me quiere";
}

Margarita(1); //me quiere
Margarita(2); //no me quiere

//Me quiere, no está decidido, no me quiere

function margaritaPremium(petalos, respuestas) {
  return petalos % 2 === 0 ? "Me quiere" : respuestas[0];
}
const respuestas = ["Me quiere", "No está decidido", "No me quiere"];
console.log(margaritaPremium(1, respuestas)); //me quiere
console.log(margaritaPremium(2, respuestas)); //no está decidido
console.log(margaritaPremium(3, respuestas)); //no me quiere

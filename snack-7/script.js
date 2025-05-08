const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];

// Recupera i dati dello studente con id 2
// Risultato: { id: 2, name: 'Mario Banfi', age: 34, class: '4A' }

// METODO FOR EACH (non lo userei)

students.forEach((currElem) => {

  if (currElem.id == 2){
    console.log(currElem)
  }
})


// METODO FILTER (utile ma crea un nuovo array)

let filtro = students.filter((currElem) => currElem.id == 2)

console.log(filtro)



// METODO FIND (utile in questo caso perchè ID è sequenziale, ma trova soltanto il primo)

let find = students.find((currElem) => currElem.id == 2)

console.log(find)

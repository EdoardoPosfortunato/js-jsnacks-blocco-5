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

// Recupera la classe dello studente 'Marco Lanci'
// Risultato: '3C'

// METODO FOR EACH (non lo userei)

students.forEach((currElem) => {

  if (currElem.name == 'Marco Lanci') {
    
    console.log(currElem.class)
  }
})


// METODO FILTER (utile ma crea un nuovo array)

let filtro = students.filter((currElem) => currElem.name == 'Marco Lanci');

filtro.forEach((student) => console.log(student.class))




// METODO FIND (utile in questo caso perchè ID è sequenziale, ma trova soltanto il primo)

let find = students.find((currElem) => currElem.name == 'Marco Lanci')

console.log(find.class)

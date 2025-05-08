const mele = [
  { nome: "Rossa Frizzante", diametro: 7.1, peso: 148 },
  { nome: "Verde Croccante", diametro: 6.9, peso: 142 },
  { nome: "Dolce del Bosco", diametro: 7.6, peso: 160 },
  { nome: "Gialla Soleggiata", diametro: 7.3, peso: 155 },
  { nome: "Mela Regina", diametro: 8.1, peso: 172 },
  { nome: "Ruggine d’Autunno", diametro: 6.7, peso: 136 },
  { nome: "Zuccherina", diametro: 7.4, peso: 150 },
  { nome: "Verde Acida", diametro: 6.4, peso: 128 },
  { nome: "Rossa di Montagna", diametro: 7.9, peso: 165 },
  { nome: "Goccia d’Oro", diametro: 7.2, peso: 152 },
  { nome: "Piccola Ribelle", diametro: 6.5, peso: 134 },
  { nome: "Dolcezza Antica", diametro: 8.0, peso: 170 },
  { nome: "Rosa Vellutata", diametro: 7.5, peso: 158 },
  { nome: "Selvatica", diametro: 6.8, peso: 139 },
  { nome: "Mela delle Fate", diametro: 7.0, peso: 144 },
];

// A partire dall'array fornito, crea due array. Uno con le mele di almeno 7 cm di diametro. L'altro con le restanti.


// con metodo foreach e if (legge array di oggetti una volta sola)

let piudiSette = [];
let altre = [];

mele.forEach((currElem) => {
  if(currElem.diametro >= 7){

    piudiSette.push(currElem)

  } else {

    altre.push(currElem)

  }
})

console.log("METODO FOREACH + IF")
console.log(piudiSette)
console.log(altre) 

console.log("--------------------------------------------------")

// metodo filter (legge array di oggetti 2 volte)

let maggioridiSette = mele.filter((curElem) => curElem.diametro >= 7)
let tutteleAltre = mele.filter((curElem) => curElem.diametro < 7)

console.log("METODO FILTER")
console.log(maggioridiSette)
console.log(tutteleAltre)


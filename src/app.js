/* eslint-disable */
// no elimino esto por si afecta el estilo del fixed-bottom p-4
import "bootstrap";
import "./style.css";

window.onload = function() {
  //variables let para definir cada parte
  let who = [
    "The dog",
    "My grandma",
    "The mailman",
    "My bird",
    "An Alien",
    "Donald Trump"
  ];
  let action = [
    "decided to sell",
    "peed",
    "crushed",
    "broke",
    "vaporized",
    "stole"
  ];
  let what = [
    "my homework",
    "my phone",
    "the car",
    "my wife",
    "my beloved PC",
    "my free will"
  ];
  let when = [
    "before the class.",
    "when I was sleeping.",
    "while I was exercising.",
    "during my lunch.",
    "while I was praying.",
    "for some secret reason only the government knows. Ssshhh...",
    ", it was a bit crazy!"
  ];

  //funciones random que seleccionan de forma aleatoria un elemento de cada array "let"
  function generateExcuse() {
    let randomWho = who[Math.floor(Math.random() * who.length)];
    let randomAction = action[Math.floor(Math.random() * action.length)];
    let randomWhat = what[Math.floor(Math.random() * what.length)];
    let randomWhen = when[Math.floor(Math.random() * when.length)];

    return `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}`;
  }
  //console.log(generateExcuse) no tendría que usarlo porque se usa document
  document.getElementById("excusa").innerHTML = generateExcuse();
};

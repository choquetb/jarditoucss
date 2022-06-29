/*Evaluation exercice 1*/

/*var j=0;
var a=0;
var v=0;
var personnes;
do {
  personnes = window.prompt("Entrez votre age");
  if ( personnes <20) {
    j++;
    console.log(personnes);
  }
  else if ((personnes >=40 ) && (personnes <=100)) {
    v++;
    console.log(v);
  }
}
while (personnes < 100);
 
window.alert("Il y a " + "" + j + "" + " jeunes\n " + "Il y a " + "" + a + "" + " adulte\n " + " Il y a " + " Il y a " + "" + v + "" +" vieux\n " + " dont "+ " 1 " + "" + " centenaire ");


---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/

/*Evaluation exercice 2*/

/*
let number = window.prompt("Entrez une table de multiplication : ");

for(let i = 1; i <= 10; i++) {

    const result = i * number;

    console.log(`${number} * ${i} = ${result}`);
}

--------------------------------------------------------------------------------------------------------------------------------------
*/

/*Evaluation exercice 3*/

/*let prenoms = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent",
"Melik", "Nouara", "Salem", "Samuel", "Stéphane"];

console.log("prenoms: " + prenoms.join());

let saisie = window.prompt("Saisissez un prenom");

let idx = prenoms.indexOf(saisie);

if (idx > -1) prenoms.splice(idx, 1);

console.log("prenoms: " + prenoms.join());



------------------------------------------------------------------------------------------------------------------------------------------
*/

/*Evaluation exercice 4*/

/*let PU = window.prompt("Veuillez saisir un prix unitaire");
let QTECOM = window.prompt("Veuillez saisir la quantité");
let TOT = calcul_TOT(PU, QTECOM);
let REM = remise(TOT);
let PAP = prixaPayer(TOT, REM);
let PORT = fraisDePort(PAP);
let prixTTC = TTC(PAP, PORT);
alert(`Prix hors taxe: ${TOT} € , remise= ${REM} €, Port ${PORT.toFixed(2)}, ${prixTTC.toFixed(2)}`);
console.log(TOT);
console.log(REM);
console.log(PAP);
console.log(PORT);

function calcul_TOT(nbr1, nbr2) {
  var resultat = nbr1 * nbr2;
  return resultat;
}

function remise(nbr1, txt) {
  var REM = 0;

  if (nbr1 < 100) {
    REM = 0;
    txtrem = "Pas de remise";
  }

  if (nbr1 >= 100 && nbr1 <= 200) {
    REM = (nbr1 * 5) / 100;
    txtrem = "Remise 5%";
  }

  if (nbr1 > 200) {
    REM = (nbr1 * 10) / 100;
    txtremise = "Remise 10%";
  }
  return REM;
  return txtrem;
}

function prixaPayer(nbr1, nbr2) {
  var ttc = nbr1 - nbr2;
  return ttc;
}

function fraisDePort(nbr1) {
  if (nbr1 > 500) {
    return 0;
  } else {
    let fdp = (nbr1 * 2) / 100;

    if (fdp<6){
      fdp = 6
    }
    return fdp;
  }
}
function TTC(nbr1, nbr2) {
  prix = nbr1 + nbr2;
  return prix;
}
*/


/* Evaluation exercice 5*/

let form = document.querySelector('#formulaireContact');

//contrôle de saisie du nom

form.nom.addEventListener('change', function() {
  validNom(this);
});

function validNom(inputNom) {
  let nomRegExp = new RegExp(
    "^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$"
  );
  console.log(inputNom.value);
  let testNom = nomRegExp.test(inputNom.value);
  let small = inputNom.nextElementSibling;
    console.log(testNom);
  if (testNom) {
    small.innerHTML = "Nom valide";
    small.classList.remove("text-danger");
    small.classList.add("text-success");
  } else {
    small.innerHTML = "Nom mal renseigné";
    small.classList.remove("text-success");
    small.classList.add("text-danger");
  }
}

//contrôle de saisie du prénom

form.prenom.addEventListener('change', function() {
  validPrenom(this);
});
function validPrenom(inputPrenom) {
  let nomRegExp = new RegExp(
    "^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$"
  );
  console.log(inputPrenom.value);
  let testPrenom = nomRegExp.test(inputPrenom.value);
  let small = inputPrenom.nextElementSibling;
    console.log(testPrenom);
  if (testPrenom) {
    small.innerHTML = "Prénom valide";
    small.classList.remove("text-danger");
    small.classList.add("text-success");
  } else {
    small.innerHTML = "Prénom mal renseigné";
    small.classList.remove("text-success");
    small.classList.add("text-danger");
  }
}

//contrôle de saisie du code postal

form.code.addEventListener ('change', function(){
  validCode(this);
});
const validCode = function(inputCode){
  let codeRegExp = new RegExp(
    '^[0-9]{5}$'
  );
  let testCode = codeRegExp.test(inputCode.value);
  let small = inputCode.nextElementSibling;

  if(testCode) {
    small.innerHTML = 'Code postal valide'
    small.classList.remove('text-danger');
    small.classList.add('text-success');
  }
  else{
    small.innerHTML = 'Le code postal doit comporter 5 chiffres';
    small.classList.remove('text-success');
    small.classList.add('text-danger');
  }
}

//contrôle de saisie de l'email

form.mail.addEventListener ('change', function(){
validMail(this);
});

const validMail = function(inputMail){
  let mailRegExp = new RegExp(
'^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$'
  );

  let testMail = mailRegExp.test(inputMail.value);
  let small = inputMail.nextElementSibling;

if(testMail) {
  small.innerHTML = 'Adresse valide';
  small.classList.remove('text-danger');
  small.classList.add('text-success');
}
else{
  small.innerHTML = 'Adresse non valide';
  small.classList.remove('text-success');
  small.classList.add('text-danger');
} 
}
var monformulaire = document.getElementById("reset").addEventListener("click", function(e) {
  let Confirmation = confirm("Supprimer le contenu du formulaire ?");

  if (Confirmation == false) {
      e.preventDefault();
  }
})




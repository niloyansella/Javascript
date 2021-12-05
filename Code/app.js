"use strict";

//Vaardigheidsopdracht Sectie 3 part 2 

const mijnEerstFunctie = function eersteFunctie(){
    console.log("Hello Dit is mijn eerste functie");
}
mijnEerstFunctie();

////////////////////////////////

const mijnTweedeFunctie = function tweedeFunctie(){
    const aanRoepFunctie = mijnEerstFunctie();
    return aanRoepFunctie;
}

mijnTweedeFunctie();
///////////////////////////////////////////

const mijnGetal = function opTellen (a,b){
    console.log(a + b);
}
mijnGetal(5,10);


//////////////////////////////////////////////
const mijnGetal1 = function opTellen (a,b){
    console.log(a - b);
}
mijnGetal(10, 3);

//////////////////////////////////////////////
const mijnGetal2 = function keerElkaar (getal1,getal2,getal3,getal4){
    console.log(getal1 * getal2 * getal3 * getal4);
}
const omzetMaandMei = mijnGetal2(5,10,5,10);


////////////////////////////////////////////////////////
const grootsteGetal = function getalZoeken (a,b){
      if(a > b){
          console.log(a);
      } else{
          console.log(b)
      }
}
grootsteGetal(15,10);
grootsteGetal(75,40);
grootsteGetal(150,120);

////////////////////////////////////////////////////////////////
let naam = "Herder";

console.log(Boolean(naam === "Herder"));

//////////////////////////////////////////////////////////////////
const grootsteGetal1 = function getalZoeken2 (a){
    console.log(Boolean(a > 1000));
}

grootsteGetal1(999);

///////////////////////////////////////////////////////////////////
const koeAanroepen = koeAanroepFunctie => {
    console.log("Ik ben een koe MOEEHHH");
}

koeAanroepen();


/////////////////////////////////////////////////////////////////////////
const dierAanroepen = (dier) => {
    console.log(`Ik ben een ${dier}`);
}

dierAanroepen("Hond");
dierAanroepen("Schaap");
////////////////////////////////////////////////////////////////////////
//10. Great 
console.log(`The name is Frits and I'am Frits and my salary is 6000 and it just got doubled!`);
////////////////////////////////////////////////////////////////////////
//Vragen aan Jorn werkt niet !!!!!!!!!!!

const calclateTotal = (x,y) =>{
    const calculateX = (x) => {
        const numberOne = x * 3;
        return numberOne;
    }

    const calculateY = (y) => {
        const numberTwo = y * 4;
        return numberTwo;
    }

    return calculateY() + calculateX();
}

calclateTotal(10,5)

//////////////////////////////////////////////////////////////////////////////////////////////////////
//Arrays
//////////////////////////////////////////////////////////////////////////////////////////////////////

const arrayOne = ["konijn" , "Koe" , "Vos" , "Das" , "Beer"];
console.log(arrayOne[1]);

console.log(arrayOne[4]);

console.log(`Dier 1: ${arrayOne[1]} Dier 2: ${arrayOne[2]}`);

console.log(`Dier 1: ${arrayOne[1]}`);
console.log(`Dier 2: ${arrayOne[2]}`);
console.log(`Lengte array: ${arrayOne.length}`);

const niloArray = ["Audi", "Mercedes" , "Jaguar", "Volkswagen"];
niloArray.push("BMW");

console.log(niloArray);

niloArray[2] = "herder";

console.log(niloArray);


const objectOne ={
    firstName: "Henk",
    lastName: "de Vries",
    age: 2021 - 1988,
    job: "teacher",
    friends: ["Koe", "Vos"],
    getFullName:function(){
        return `${this.firstName} ${this.lastName}`;
    }
};

console.log(`My job is being a ${objectOne.job}`);
console.log(`My friends are ${objectOne.friends[0]} , ${objectOne.friends[1]}`)

console.log(objectOne.age - 25);

//5. De functie kan buiten de object gereturned gekomen.

const mijnObject = {
    firstName: "Niloyan",
    age: 2021-2001,
    job: "Freelancer",
    geef:function(){
        console.log(this.firstName, this.job);
    }
};

mijnObject.geef();

mijnObject.woonplaats = "Amsterdam";

console.log(mijnObject);

// De if statement klopt niet omdat de code die er uitgevoerd moet worden
// niet is meegegeven.

const ikStudent  = {
    naam: "Niloyan",
    geboortejaar: 2001,
    vak: "Front-end",
}

const docent  = {
    naam: "Jorn",
    geboortejaar: 1991,
    vak: "Front-end",
}

function getAge(){
    console.log(2021 - ikStudent.geboortejaar);
    console.log(2021 - docent.geboortejaar);
}

getAge();

function getEldestAge(){
    if(2021 - docent['geboortejaar'] >2021 - ikStudent['geboortejaar']){
        console.log("Jorn");
    }else{
        console.log("Niloyan");
    }
}

getEldestAge();


const persoonWoonplaats ={
    amsterdam : ["Niloyan","David"," Piet"],
    almere : ["Brandon" , " Shayaan " , "Jeffrey " ],
    dronten: ["Dami" , "Sam"],
};

function krijgWoonplaats(){
    console.log(persoonWoonplaats.almere)
}

krijgWoonplaats();

/// 
// Foor loop
for (let i = 1; i<=10; i++){
    console.log(i);
}
let j = 1;

while (j<= 10) {
    j
    console.log(j++);
  }

  for (let i = 1; i<=100; i++){
    console.log(i);
}

let g = 1;

while (g<= 100) {
    g
    console.log(g++);
  }

  for (let i = 1; i<=1000; i++){
    console.log(i);
}

let d = 1;

while (d<= 100) {
    d
    console.log(d++);
  }


  for (let i = 100; i<=1000; i++){
    console.log(i);
}

let y = 100;

while (y<= 1000) {
    y
    console.log(y++);
  }


  for (let i = 100; i>=0; i--){
    console.log(i);
}

let l = 100;

while (y >= 0) {
    y
    console.log(y--);
  }

  for (let i = 2; i<=1000; i+=2 ){
    console.log(i);
}

let n  = 0;
while (n <= 1000) {
    n
    console.log(n += 2);
  }

  for (let i = 100; i<=10000; i+=100 ){
    console.log(i);
}

let t  = 0;
while (t <= 10000) {
    t
    console.log(t += 100);
  }

  // 9. De waarde is niet meegegeven om iets af te trekken of op te tellen

  //10. De waarde is 50 van i dan kan de counter alleen vanaf 50 doen.

  //11. I blijft dezelfde 

  //12. Er is geen is teken

  //13. 
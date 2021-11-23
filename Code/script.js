const huidigSchool = "ROC van Flevoland";
const vorigeSchool = "ROC van Amsterdam";
console.log(huidigSchool);
console.log(vorigeSchool);


let myAge = 20;
console.log(myAge);

let mijnAge1 = 2001;
let age = 2021 - mijnAge1;

console.log(age);


let x = 2;
let machtVan = x **8; 
console.log(machtVan);


const mijnAdres = "Grianestraat"
const adresToevoeging = 21;
const volledigeAdres = mijnAdres + " " + adresToevoeging;
console.log(volledigeAdres);


let numberOne = 12;
let totalNumber = numberOne + 15;
console.log(totalNumber);

let numberTWo = 12;
let totalNumber1 = numberTWo * 15;
console.log(totalNumber1);

let numberThree = 12;
let totalNumber3 = numberOne -1;
let totalNumber4 = numberOne--;
let totalNumber5 = --numberOne;

console.log(totalNumber3);
console.log(totalNumber4);
console.log(totalNumber5);


//Vraag 20 : 

let childHeight;
let fatherHeight = 183;
let motherHeight = 178;
let fatherHeightSon = fatherHeight * 3;
let motherHeightSon = motherHeight * 1;
childHeight =  fatherHeightSon * 1 /4 ;
console.log(childHeight);


//------------------Sectie2 17t/m 19-----------------------//

//Opdracht 1

const mijnNaam = "Niloyan";
const achterNaam = "Sellathurai";
const mijnLeeftijd = 20;
console.log(mijnNaam + " " +achterNaam + " " + mijnLeeftijd);

//Opdracht 2 

console.log("Mijn naam" + " " + mijnNaam);

//Opdracht 3 

console.log("Mijn volledige naam is " + mijnNaam + " " + achterNaam)


//Opdracht 4 

let geboorteJaar = 2001;
let hetJaar = 2056;

console.log(`In ${hetJaar} ben dan ${hetJaar - geboorteJaar}` );

//Opdracht 5 

console.log(`Mijn Naam is ${mijnNaam} en ik ben ${mijnLeeftijd} jaar oud. Daarnaast
is mijn familienaam is ${achterNaam}`);

// OPdracht 6 
const hetWeer = "Regen";

if(hetWeer == "Regen"){
    console.log("Neem een paraplu mee");
}else{
    console.log("Laat je paraplu thuis");
}

//Opdracht 7

const grasKleur = "Geel";

if(grasKleur == "Geel"){
    console.log("Geef een beetje water");
}else{
    console.log("Laat maar lekker zo staan");
}

//Opdracht 8 

const isHetWinter = true;

if(isHetWinter == true){
    console.log("Zet de verwarming aan");
}else{
    console.log("Dans op de tafel");
}

//Opdracht 9 

const regen = true;

if(regen == true){
    console.log("Ik neem een paraplu mee en ik doe een regenjas aan");
}else{
    console.log("Dan zet ik een zonnebril");
}

//////////////////--------Sectie 2 Video 20 t/m 25---------------///////////////////////////

//Opdracht 1

const x1 = 1;
const y = "1";
const z = 2;
console.log((z + x1 )* 3);

//Opdracht 2 

console.log(x1 - x1);

//Opdracht 3 

console.log( z + y - 1 )

//Opdracht 4
console.log(y+z+y);

//Opdracht 5 
console.log( 265 - Number(y+z+y) );

/////_------------------------Vaardigheid opdracht----------------------------------/////////////////////////

//Cijfers van Sofie
const cijfer1 = 9.4;
const cijfer2 = 3.8;
const cijfer3 = 2.7;
const cijfer4 = 6.7;
const cijfer5 = 8.9;

//Cijfers van Sarah

const cijfer10 = 7.7; 
const cijfer11 = 7.6;
const cijfer12 = 7.3; 
const cijfer13 = 5.8;
const cijfer14 = 6.9;

//Opdracht 10 

const eindCijferSofie  = (cijfer1 + cijfer2 + cijfer3  + cijfer4 + cijfer5) / 5;

//Opdracht11
const eindCijferSofie1  = (cijfer1 + cijfer2 + cijfer3  + cijfer4 + cijfer5*2) / 5;

//Test 
console.log(eindCijferSofie);
console.log(eindCijferSofie1)

//Opdracht 12

const eindCijferSarah  = (cijfer10 + cijfer11 + cijfer12  + cijfer13 + cijfer14) / 5;
console.log(eindCijferSarah);

//Opdracht 13
if(eindCijferSarah > eindCijferSofie){
    console.log("Sarah heeft hoogste cijfer");
}else{
    console.log("Sofie heeft hoogste cijfer")
}

//Opdracht14

if(eindCijferSarah > eindCijferSofie){
    console.log("Sarah");
}else{
    console.log("Sofie")
}

if(eindCijferSarah > eindCijferSofie && eindCijferSarah > 7){
    console.log("Sarah heeft de hoogste cijfer met een gemiddelde van een 7")
}else if(eindCijferSarah > eindCijferSofie) {
     console.log("Sarah heeft de hoogste cijfer met een voldoende cijfer")
}else if (eindCijferSofie > eindCijferSarah && eindCijferSofie > 7){
    console.log("Sofie heeft de hoogste cijfer met een gemiddelde van een 7")
}else{
    console.log("Sofie heeft de hoogste cijfer met een voldoende cijfer")
}


//Opdracht 15 

if(eindCijferSarah > eindCijferSofie && eindCijferSarah > 7){
    console.log("Sarah")
    console.log("Goed gedaan hoger dan een 7");
}else if (eindCijferSofie > eindCijferSarah && eindCijferSofie > 7){
    console.log("Sofie")
    console.log("Goed gedaan hoger dan een 7")
}

//Opdracht 16 
//Hier heb ik een live example voor mezelf toegevoegd om de code logica beter te snappen.

const studiefinanciering = 18;
let input = prompt("Hoe oud ben jij?")
if(studiefinanciering <= input){
    console.log("Yeey Stufi!")
}else{
    console.log("Helaas moet je nog wachten voor stufi");
}

//Opdracht 17
let input1 = prompt("Hoe oud ben jij?")
let meerStufi = "Alleen"
let woonSituatie = prompt("waar woon je momenteel thuis/alleen");

if(studiefinanciering <= input1 && woonSituatie == meerStufi){
    console.log("YEY meer stuffi")
}

//Opdracht 18

let leeftijdMaaike = prompt("Maaike! Hoe oud ben jij?");

if(studiefinanciering <= leeftijdMaaike){
    console.log("Maaike heeft recht op studiefinanciering")
}else{
    console.log("Helaas moet zij wachten tot dat zij 18 word.")
}

// Sectie 2 Video 26 t/m 30 

// Opdracht 1

const day = "Kerst"

switch(day){
    case "Maandag":
    case "Donderdag":
    case "Vrijdag":     
        console.log("falafel met salade");
        break;
    case "Dinsdag":
    case "Woensdag":
        console.log("Spinazie");
        break;
    case "Zaterdag":
    case "Zondag" : 
    console.log("Linzensoep");
    break;

    case "Kerst": 
        console.log("Kalkoen")
    break;
    default:
        console.log("Geen geldige dag!!")    
}
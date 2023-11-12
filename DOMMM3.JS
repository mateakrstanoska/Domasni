const zborovi = ["uchenje","domashna", "programa", "ispit", "uspeh", "kafe", "meana","stres", "laptop","termos","radio","karakter", "naselba", "benzin",
 "krevet", "zhurka", "inzhener", "prenos", "internet", "bokal", "rechnik"];
var zbor = "";
var obidi = 0;

function start() {
    zbor = zborovi[Math.floor(Math.random() * 20)];
    alert("Pogodi go zborot: " + generirajPrikaz(zbor));
  
    obidi = 0;
    proverka();
}

function generirajPrikaz(zbor) {
    var prikaz = "";
    counter=0;
    for (var i = 0; i < zbor.length; i++) {
        if ( Math.random() > 0.5 && counter<3) {
            prikaz += zbor.charAt(i);
            counter++;
        } else {
            prikaz += " _ ";
        }
    }
    return prikaz;
}

function proverka() {
    var guess = prompt("Vnesi zbor: "); 
    

    if (guess == zbor) 
    {
        alert("Uspeshna igra!");
        start();
    } 
    else {
        obidi++;
        if (obidi < 5) {
            alert("obidete se povtorno");
            proverka();
        } else {
            alert("Pochetok na  nova igra?");
            start();
        }
    }
}

document.getElementById("startButton").addEventListener("click", start);
function KleurEnTekstAanpassen()
{
    document.getElementById("kop1").style.color = "red";
    document.getElementById("kop1").innerHTML = "I have changed!";
}

function Reset()
{
    document.getElementById("kop1").style.color = "Black";
    document.getElementById("kop1").innerHTML = "Welkom!";
}

function Calculate(getal1,getal2)
{
antwoord = getal1 + getal2;
console.log("Het antwoord van de som is:");
console.log(antwoord);
}


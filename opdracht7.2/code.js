// De prijs van het product blijft hard gecodeerd zoals gevraagd
let productprijs = 60;

// Gebruik een prompt om de gebruiker zijn/haar saldo te vragen
let budget = parseFloat(prompt("Wat is het saldo?"));

let saldo = document.getElementById("Resultaat");

if (budget >= productprijs) {
    let over = budget - productprijs;
    saldo.innerHTML = "U heeft genoeg geld! Er is nog " + over + " euro over na de aankoop.";
    saldo.style.color = "green";
} else {
    saldo.innerHTML = "Helaas, u heeft te weinig geld!";
    saldo.style.color = "red";
}
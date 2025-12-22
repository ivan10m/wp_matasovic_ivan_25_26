/* let broj1 = prompt("Unesi prvi broj: ");
let broj2 = prompt("Unesi drugi broj: ");
let broj11 = parseInt(broj1);
let broj22 = parseInt(broj2);
if(broj11 > broj22)
{
    alert(broj1 + " je veći od " + broj2);
}
else if(broj11 < broj22)
{
    alert(broj2 + " je veći od " + broj1);
}
else
{
    alert("Brojevi su jednaki");
} */

/* BMI App

BMI = masa(kg)/ (visina*visina) (m)
- unijeti masu i visinu
- ispisati bmi (Vaš BMI iznosi: XX) */

let masa = prompt("Unesi masu u kg: ");
let visina = prompt("Unesi visinu u m:");
let bmi = Math.round(masa/(visina*visina));

alert("Vaš BMI indeks iznosi: " + bmi);
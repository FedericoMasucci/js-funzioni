let N = Number(prompt("Quanti anni hai? (L'algoritmo ti etichetta fino ai 115 anni)"));
let eta;

function controlloeta(N) {
    let n = N;
    const errore = "Il numero inserito non è valido";

    if (n > 0 && n < 115) {
        return n;
    } else
        return errore;
}


eta = controlloeta(N);

if (typeof eta === "number") {
    if (eta < 18) {
        alert(`Hai ${eta} anni quindi sei MINORENNE`);
    } else if (eta >= 18 && eta <= 35) {
        alert(`Hai ${eta} anni quindi sei un GIOVANE ADULTO`);
    } else if (eta >= 36 && eta <= 60) {
        alert(`Hai ${eta} anni quindi sei un ADULTO`);
    } else
        alert(`Hai ${eta} anni quindi sei un Senior`);
} else
    alert(eta);
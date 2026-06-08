let i;
let N = [];
let codice = [];
let j = 0;

for (i = 0; i < 3; i++) {
    N[i] = Number(prompt("Dammi il codice di spedizione"));
}


function controlloinp(N) {
    const errore = "Stato Sconosciuto";
    let n = N;
    let i = 0;

    if (n[i] === 1 && n[i + 1] === 2 && n[i + 2] === 3) {
        return n;
    } else
        return errore;
}

codice = controlloinp(N);

if (codice[j] === 1) {
    alert("IN ELABORAZIONE");
} else
    alert("STATO SCONOSCIUTO");
if (codice[j + 1] === 2) {
    alert("SPEDITO");
} else
    alert("STATO SCONOSCIUTO");
if (codice[j + 2] === 3) {
    alert("CONSEGNATO");
} else
    alert("STATO SCONOSCIUTO");
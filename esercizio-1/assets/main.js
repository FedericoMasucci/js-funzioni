let N = Number(prompt("Inserisci un numero da 1 a 7 per avere il giorno della settimana corrispondente"));
let giorno;

function controllo(N) {
    const errore = "Il numero inserito non è valido";
    let n = N;

    if (n >= 1 && n <= 7) {
        return n;
    }
    else return errore;
}

giorno = controllo(N);

if (typeof giorno === "number") {
    switch (giorno) {
        case 1:
            alert("Lunedì");
            break;
        case 2:
            alert("Martedì");
            break;
        case 3:
            alert("Mercoledì");
            break;
        case 4:
            alert("Giovedì");
            break;
        case 5:
            alert("Venerdì");
            break;
        case 6:
            alert("Sabato");
            break;
        case 7:
            alert("Domenica");
            break;
    }
} else
    alert(giorno);

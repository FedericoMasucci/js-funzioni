# Esercizio 3

Un tracker di spedizioni usa codici numerici. Scrivi una funzione che riceve un codice (1, 2, 3) e restituisce "In elaborazione" per 1, "Spedito" per 2, "Consegnato" per 3. Se il codice non esiste, restituisce "Stato sconosciuto".

## Ragionamento

- Chiediamo all'utente un array composto da 3 elementi 
   - Controlliamo con una funzione che il codice inserito sia corretto 
      - Se il codice inserito è sbagliato restituisce STATO SCONOSCIUTO
- Poi controlliamo che il codice sia composto da 1-2-3 e che stamperà:
   - 1 = IN ELABORAZIONE
   - 2 = SPEDITO
   - 3 = CONSEGNATO
- Se non sono stati inseriti questi 3 numeri stamperà STATO SCONOSCIUTO.
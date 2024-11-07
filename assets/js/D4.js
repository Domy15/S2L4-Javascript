/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

area = (l1, l2) => {
    return l1 * l2;
}

console.log(area(6,5));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

crazySum = (n1, n2) => {
    let somma = n1 + n2;
    if(somma === n1 || somma === n2){
        return somma * 3;
    }else{
        return somma;
    }
}

console.log(crazySum(0,7));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

crazyDiff = (numero) => {
    return Math.abs(numero - 19);
}

console.log(crazyDiff(5));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

boundary = (n) =>{
    if(n > 20 && n <= 100 || n === 400){
        return true;
    }else{
        return false;
    };
}

console.log(boundary(10));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

epify = (stringa) => {
    if(stringa.slice(0, 7) !== "EPICODE"){
        return "EPICODE " + stringa;
    }else{
        return stringa;
    };
}

console.log(epify("impara a programmare"));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

check3and7 = (numpos) => {
    if(numpos > 0){
        if(numpos % 3 ===0){
            return "Il numero è un multiplo di 3";
        }else if(numpos % 7 === 0){
            return "Il numero è un multiplo di 7";
        }else{
            return "Il numero non è ne multiplo di 3 ne di 7";
        };
    }else{
        return "Il numero non è positivo";
    };
}

console.log(check3and7(14));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

reverseString = (str) => {
    return str.split("").reverse().join("");
    
}

console.log(reverseString("Ciao"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

upperFirst = (parole) => {
    let split = parole.split(" ");
    for(let i = 0; i < split.length; i++){
        let rest = split[i].slice(1);
        let firstlett = split[i].charAt(0).toUpperCase();
        split[i] = firstlett+rest;
    };
    return split.join(" ");
}

console.log(upperFirst("panino col salame"));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

cutString = (cavalli) => {
    return cavalli.slice(1,-1);
}

console.log(cutString("Patatine verdi veramente buone"));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

let numeriacaso = [];

giveMeRandom = (n) => {
    for(let i = 0; i < n; i++){
        numeriacaso[i] = Math.floor(Math.random() * 11);
    };
    return numeriacaso;
}

console.log(giveMeRandom(7));
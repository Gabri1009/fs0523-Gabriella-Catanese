/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/
/*Principali datatype*/

/*string*/
let nome = 'India Rose';
console.log ('India Rose')
//la stringa è una sequenza di caratteri ed è anche detta alfanumerica. Se la stringa comincia con un apice o apostrofo deve terminare con lo stesso apic, se inizia con le virgolette deve termiare con virgolette

/*number*/

let numero = 10;
console.log (10)
//questo tipo di dati è numerico, può essere un numero intero o decimale, se così fosse deve essere separato da un punto, ad esempio 10.2.Si distingue dalla stringa perchè non ha bisogno di essere virgolettato

/*boolean*/

let larghezza =true;
let profondità = false;
console.log(larghezza)

//questo dato può assumere solo due valori true o false

/*null*/
let y = null;
console.log(null)

//questo datatype segnala l'assenza di un oggetto intenzionalmente

/*undefined*/
let Desirè;
console.log(Desirè)

//sta ad indicare una variabile che non ha un valore assegnato

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
let NAME = 'Gabriella';
console.log(NAME)


/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
let Harry = 12;
let Hermione = 20;
let Ron = Harry + Hermione;
console.log(Ron)

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
var x =12;
console.log(x)


/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/


let NAME = 'Gabriella';
let SURNAME = 'Catanese';
LET Name1 = NAME===SURNAME;

console.log(Name1)


 /*
        Costanti
        */

        const MIO_NOME = 'Gabri';
        //MIO_NOME = 'Agnese';Assignment to constant variable.

        const PERSONA = {
            nome : 'Signore';
            cognome : 'Oscuro';
        }

        // Object.freeze(PERSONA); Per bloccare modifiche ai valori di un oggetto
        PERSONA.nome = 'Voldemort';

        console.log(PERSONA);


/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
let Silente= 4;
let Harry = 12;
let Piton = Silente - Harry;
console.log(Piton)



/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/


let NAME1 = 'john';
let NAME2 = 'John';

console.log(NAME1!=NAME2)

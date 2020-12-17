// Create una todo list usando VueJS.
// Potete dare sfogo alla creativitá e per quanto riguarda l'HTML e il CSS.
// Se non sapere che fare, di seguito trovate uno screenshot.
// Funzionalitá:
// La nostra todo list avrá alcune tasks di default predefinite...fatto;
// L'utente puó inserire nuove tasks.....fatto;
// Cliccando sulla "X" l'utente puó cancellare una task.....fatto;
// Se non ci sono piu task nella lista, mostrate un messaggio tipo "Nulla da fare".....fatto;
// Quando l'utente inserisce una task ha due modi per salvarla: o preme il pulsante add o preme il taso Enter della tastiera....fatto;
// Attenzione: l'utente non deve inserire tasks vuote ma almeno un tot di caratteri.....fatto;


// Istruzioni Bonus (da mettere in una cartella bonus):
// L'utente vuole poter modificare una task giá inserita
// ma vuole anche poter indicare che la task é stata completata
// inoltre se una task é stata completa allora vuole che venga inserita in un'altra colonna tipo "tasks completate"
// ah non é finita, dice che quando cancella una task, non vuole che questa venga subito rimossa, ma vuole che resti visibile ma venga spostata in una colonna tipo "cestino"
// si, l'utente é un rompi scatole, dice infine che vuole poter rimuovere tutte le tasks nel cestino cliccando su un pulsante tipo "svuota cestino"


let app = new Vue ({
  el: "#root",
  data: {
    newThing: "",
    myList: [
      "do something",
      "do else",
      "do something else"
    ],
    replaceThing: ""
  },
  methods: {
    addThing (){
      if (this.newThing.length < 5) {
        alert("inserisci almeno 5 caratteri");
      } else {
        this.myList.push(this.newThing);
      }
    },
    removeThing(){
      this.myList.pop(this.myList.item)

    },
    replace(){
      replaceThing: prompt("modifica questo item"),
      this.myList.pop(this.myList.item),
      this.mylist.push(this.replaceThing)


    }
  },
})

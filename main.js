// Create una todo list usando VueJS.
// Potete dare sfogo alla creativitá e per quanto riguarda l'HTML e il CSS.
// Se non sapere che fare, di seguito trovate uno screenshot.
// Funzionalitá:
// La nostra todo list avrá alcune tasks di default predefinite
// L'utente puó inserire nuove tasks.....fatto;
// Cliccando sulla "X" l'utente puó cancellare una task.....fatto;
// Se non ci sono piu task nella lista, mostrate un messaggio tipo "Nulla da fare".....fatto;
// Quando l'utente inserisce una task ha due modi per salvarla: o preme il pulsante add o preme il taso Enter della tastiera....fatto;
// Attenzione: l'utente non deve inserire tasks vuote ma almeno un tot di caratteri.

let app = new Vue ({
  el: "#root",
  data: {
    newThing: "",
    message: "devi inserire qlk comprensibile",
    myList: [
      "do something",
      "do else",
      "do something else"
    ]
  },
  methods: {
    addThing (){
      if (this.newThing.length < 5) {
        alert("inserisci qlk di comprensibile");
      } else {
        this.myList.push(this.newThing);
      }


  },
  removeThing(){
    this.myList.pop(this.myList.item)

  }

}
})

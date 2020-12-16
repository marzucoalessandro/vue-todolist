let app = new Vue ({
  el: "#root",
  data: {
    newThing: "",
    myList: [
      "do something",
      "do else",
      "do something else"
    ]
  },
  methods: {
    addThing (){
    
      this.myList.push(this.newThing);
    },
    removeThing(){
      this.myList.pop(this.myList.item)

    }

  }
})

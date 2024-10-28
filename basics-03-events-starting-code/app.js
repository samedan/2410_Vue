const app = Vue.createApp({
  data() {
    return {
      counter: 5,
      name: "",
      confirmedName: "", // aftre enter on fomr
    };
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
    remove(num) {
      this.counter = this.counter - num;
    },
    setName(event, lastName) {
      this.name = event.target.value + " " + lastName;
    },
    submitForm(event) {
      // event.preventDefault();
      alert("submitted");
    },
    confirmInput() {
      this.confirmedName = this.name;
    },
  },
});

app.mount("#events");

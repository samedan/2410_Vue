const app = Vue.createApp({
  data() {
    return {
      outputText: "",
      outputText2: "",
    };
  },
  methods: {
    setAlert() {
      alert("alert");
    },
    saveInput(event) {
      this.outputText = event.target.value;
    },
    setOutputText2(event) {
      this.outputText2 = event.target.value;
    },
  },
});

app.mount("#assignment");

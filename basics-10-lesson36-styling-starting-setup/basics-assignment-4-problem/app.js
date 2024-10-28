const app = Vue.createApp({
  data() {
    return {
      inputClass: "",
      visible: true,
      inputBackgroundColor: "",
    };
  },
  computed: {},
  methods: {
    fetchClass(event) {
      this.selectedClass = event.target.value;
    },
    toggleVisible() {
      this.visible = !this.visible;
    },
  },
});

app.mount("#assignment");

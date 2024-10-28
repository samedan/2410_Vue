const app = Vue.createApp({
  data() {
    return {
      number: 0,
    };
  },
  computed: {
    result() {
      if (this.number < 37) {
        return "Not there yet";
      } else if (this.number === 37) {
        return 37;
      } else {
        return "Too much";
      }
    },
  },
  watch: {
    // watch for any changes in computed: -> result()
    result() {
      console.log("watcher executed");

      const that = this;
      // 'this' relates to data outside of this function
      setTimeout(function () {
        that.number = 0;
      }, 5000);
    },
  },
  methods: {
    addNumber(num) {
      this.number = this.number + num;
    },
  },
});

app.mount("#assignment");

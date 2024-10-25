const app = Vue.createApp({
  data() {
    return {
      courseGoal: "Finish",
      vueLink: "www.vuejs.org",
    };
  },
  methods: {
    outputGoal: function () {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return "Smaller than half";
      } else {
        return "Bigger than 0.5";
      }
    },
  },
});

app.mount("#user-goal");

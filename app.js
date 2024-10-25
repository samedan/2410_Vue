const app = Vue.createApp({
  data() {
    return {
      courseGoalA: "<small>Finish</small>",
      courseGoalB: "<i>Master</i>",
      vueLink: "www.vuejs.org",
    };
  },
  methods: {
    outputGoal: function () {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
  },
});

app.mount("#user-goal");

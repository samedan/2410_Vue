const app = Vue.createApp({
  data() {
    return {
      courseGoal: "Finish",
      vueLink: "www.vuejs.org",
    };
  },
});

app.mount("#user-goal");

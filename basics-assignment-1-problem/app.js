const app = Vue.createApp({
  data: function () {
    return {
      myName: "Dan",
      myAge: 46,

      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHJHWmSsCOwvn6N8M7N8ySCCVU95a2cxwm_o5aIkzdkIcs4RIt_j1HIR4&s",
    };
  },
  methods: {
    favouriteNumber: function () {
      return (faveNumber = Math.random());
    },
    calculateAgePlus5: function () {
      return this.myAge + 5;
    },
  },
});

app.mount("#assignment");

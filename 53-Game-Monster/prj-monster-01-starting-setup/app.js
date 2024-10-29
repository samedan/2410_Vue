function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
    };
  },
  computed: {
    monsterBarStyles() {
      return { width: this.monsterHealth % "%" };
    },
    playerBarStyles() {
      return { width: this.playerHealth % "%" };
    },
  },
  methods: {
    attackMonster() {
      // const attackValue = Math.floor(Math.random() * (12 - 5)) + 5;
      const attackValue = getRandomValue(5, 12);
      this.monsterHealth = this.monsterHealth - attackValue;
      this.attackPlayer();
    },
    attackPlayer() {
      // const attackValue = Math.floor(Math.random() * (15 - 8)) + 8;
      const attackValue = getRandomValue(8, 15);
      this.playerHealth = this.playerHealth - attackValue;
    },
  },
});

app.mount("#game");

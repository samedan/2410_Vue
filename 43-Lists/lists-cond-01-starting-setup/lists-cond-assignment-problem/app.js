const app = Vue.createApp({
  data() {
    return {
      newTask: "",
      tasks: ["0task"],
      visible: true,
    };
  },
  computed: {
    buttonCaption() {
      return this.visible ? "Hide List" : "Show List";
    },
  },
  methods: {
    addNewTask() {
      this.tasks.push(this.newTask);
    },
    handleClick() {
      this.visible = !this.visible;
    },
  },
});

app.mount("#assignment");

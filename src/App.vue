<template>
  <ul>
    <li v-for="todo in allTodos" :key="todo.id">{{ todo.name }}</li>
    <input v-model="firstName" placeholder="firstName" type="text" />
    <input v-model="lastName" placeholder="lastName" type="text" />
    <input v-model="age" placeholder="age" type="number" />
    <input v-model="country" placeholder="country" type="text" />
  </ul>

  <button @click="addName">click</button>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "App",
  data() {
    return {
      firstName: "ali",
      lastName: "samavi",
      age: "29",
      country: "iran",
    };
  },
  methods: {
    ...mapActions(["addTodos"]),
    addName(name) {
      const factoryName = { name, id: Math.random() };
      this.addTodos(factoryName);
    },
  },
  computed: mapGetters(["allTodos"]),
};
</script>

<style></style>

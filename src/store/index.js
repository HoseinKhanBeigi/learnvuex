import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      todos: [],
    };
  },

  getters: {
    allTodos: (state) => state.todos,
  },

  actions: {
    addTodos({ commit }, value) {
      commit("setTodos", value);
    },
  },
  mutations: {
    setTodos: (state, result) => {
      return state.todos.push(result);
    },
  },
});

export default store;

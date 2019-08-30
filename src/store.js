import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    messages: []
  },
  mutations: {
    addMessage (state, message) {
      state.messages.push(message);
    },
    removeMessage (state, message) {
      state.messages.splice(state.messages.indexOf(message), 1);
    }
  },
  getters: {
    messageCount: state => {
      return state.messages.length
    }
  }
});

export default store;
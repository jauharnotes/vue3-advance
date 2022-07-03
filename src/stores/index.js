import { createStore } from 'vuex';

export const store = createStore({
  state() {
    return {
      totalLikes: 0,
      username: '',
    };
  },
  mutations: {
    increment(state) {
      state.totalLikes++;
    },
    setUsername(state, value) {
      state.username = value;
    },
  },
});

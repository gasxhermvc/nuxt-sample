export const state = () => ({
  lists: []
})

export const getters = {
  TODOS: state => state.lists
}

export const mutations = {
  SET_TODOS(state, todos) {
    state.lists = todos;
  }
}

export const actions = {
  async GET_TODOS({ commit }) {
    const response = await this.$axios.get('https://jsonplaceholder.typicode.com/todos');
    commit('SET_TODOS', response.data);
  }
}

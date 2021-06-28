export const state = () => ({
  lists: []
})

export const getters = {
  POSTS: state => state.lists
}

export const mutations = {
  SET_POSTS(state, posts) {
    state.lists = posts;
  }
}


export const actions = {
  async GET_POSTS({ commit, state }) {
    const response = await this.$axios.get('https://jsonplaceholder.typicode.com/posts');
    commit('SET_POSTS', response.data);
  }
}

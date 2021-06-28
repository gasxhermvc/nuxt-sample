export const state = () => ({

})

export const actions = {

  async nuxtServerInit({ commit, state, dispatch }) {
    await dispatch('post/GET_POSTS')
    await dispatch('todo/GET_TODOS')
  }
}

import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: [],
    p: [],
    query: '',
    User: []

  },
  mutations: {
    SET_STATE(state, posts) {
      state.posts = posts
    },
    TO_POST(state, p) {
      state.p = p
    },
    REGISTER_USER(state, user) {
      state.User = user
    }
  },
  actions: {
    posted({
      commit
    }) {
      axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then(data => {
          console.log(data.data);
          let posts = data.data
          commit('SET_STATE', posts)

        })
        .catch(er => er)

    },
    to_post({
      commit
    }, title) {
      axios({
          url: 'https://jsonplaceholder.typicode.com/posts',
          method: 'post',
          data: {
            title: title,
            body: "body to this title"
          }
        })
        .then(data => {
          console.log('---------->', title);
          let posts = data.data
          commit('TO_POST', posts)

        })
        .catch(er => er)
    },
    register({
      commit
    }, User) {
      axios({
          url: 'https://fast-food-fast-db.herokuapp.com/api/v1/auth/signup',
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'post',
          data: User
        })
        .then(data => {
          console.log('---------->', data);
          let user = data.data
          commit('REGISTER_USER', user)

        })
        .catch(er => er)
    }
  }
})
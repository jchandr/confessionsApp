import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedConfessions: [],
    allConfessions: [],
    user: null,
    loading: false,
    error: null
  },
  mutations: {
    setLoadedConfessions (state, payload) {
      state.loadedConfessions = payload
    },
    setAllConfessions (state, payload) {
      state.allConfessions = payload
    },
    createConfession (state, payload) {
      state.loadedConfessions.push(payload)
    },
    setUser (state, payload) {
      state.user = payload
    },
    setLoading (state, payload) {
      state.loading = payload
    },
    setError (state, payload) {
      state.error = payload
    },
    clearError (state) {
      state.error = null
    }
  },
  actions: {
    loadConfessions ({commit}) {
      commit('setLoading', true)
      firebase.database().ref('confessions').once('value')
        .then((data) => {
          const confessions = []
          const obj = data.val()
          for (let key in obj) {
            confessions.push({
              id: key,
              title: obj[key].title,
              description: obj[key].description,
              imageUrl: obj[key].imageUrl,
              date: obj[key].date,
              creatorId: obj[key].creatorId
            })
          }
          commit('setLoadedConfessions', confessions)
          commit('setLoading', false)
        })
        .catch(
          (error) => {
            console.log(error)
            commit('setLoading', false)
          }
        )
    },
    createConfession ({commit, getters}, payload) {
      const confession = {
        title: payload.title,
        description: payload.description,
        date: payload.date.toISOString(),
        creatorId: getters.user.id
      }
      firebase.database().ref('confessions').push(confession)
        .then((data) => {
          const key = data.key
          commit('createConfession', {
            ...confession,
            id: key
          })
        })
        .catch((error) => {
          console.log(error)
        })
      // Reach out to firebase and store it
    },
    signUserUp ({commit}, payload) {
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            commit('setLoading', false)
            const newUser = {
              id: user.uid,
              registeredConfessions: []
            }
            commit('setUser', newUser)
          }
        )
        .catch(
          error => {
            commit('setLoading', false)
            commit('setError', error)
            console.log(error)
          }
        )
    },
    signUserIn ({commit}, payload) {
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            commit('setLoading', false)
            const newUser = {
              id: user.uid,
              registeredConfessions: []
            }
            commit('setUser', newUser)
          }
        )
        .catch(
          error => {
            commit('setLoading', false)
            commit('setError', error)
            console.log(error)
          }
        )
    },
    autoSignIn ({commit}, payload) {
      commit('setUser', {id: payload.uid, registeredConfessions: []})
    },
    logout ({commit}) {
      firebase.auth().signOut()
      commit('setUser', null)
    },
    clearError ({commit}) {
      commit('clearError')
    }
  },
  getters: {
    loadedConfessions (state) {
      return state.loadedConfessions
    },
    allConfessions (state) {
      return state.allConfessions
    },
    featuredConfessions (state, getters) {
      return getters.loadedConfessions.slice(0, 5)
    },
    loadedConfession (state) {
      return (confessionId) => {
        return state.loadedConfessions.find((confession) => {
          return confession.id === confessionId
        })
      }
    },
    user (state) {
      return state.user
    },
    loading (state) {
      return state.loading
    },
    error (state) {
      return state.error
    }
  }
})

import Vue from 'vue'
import App from './App.vue'
import store from './store'
import firebase from 'firebase'

Vue.config.productionTip = false

const config = {
  apiKey: "AIzaSyAGcSaLwvP8GJ8tgNxYk2qxKZm_XcJxD-g",
  authDomain: "todo-list-32e5c.firebaseapp.com",
  databaseURL: "https://todo-list-32e5c.firebaseio.com",
  projectId: "todo-list-32e5c",
  storageBucket: "todo-list-32e5c.appspot.com",
  messagingSenderId: "961787338118"
}

firebase.initializeApp(config)

export const db = firebase.firestore()

new Vue({
  store,
  render: function (h) { return h(App) }
}).$mount('#app')

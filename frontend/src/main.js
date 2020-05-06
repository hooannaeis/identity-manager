import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueFirestore from 'vue-firestore';
import firebaseConfig from './firebaseConfig';
import { firebase } from "@firebase/app";
import "@firebase/firestore";
import "@firebase/auth";

// deactivate the hint that you are in dev mode
Vue.config.productionTip = false;

// Importing the global css file
import "@/assets/scss/main.scss"

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});

Vue.use(VueFirestore);

export const db = firebase.firestore();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

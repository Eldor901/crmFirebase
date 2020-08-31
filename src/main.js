import Vue from "vue";
import Vuelidate from "vuelidate";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "materialize-css/dist/js/materialize.min.js";
import messagePlugin from "./utils/message.plagin";
import firebase from "firebase";
import "firebase/auth";
import "firebase/database";
import Loader from "./components/app/Loader";
import currencyFilter from "./filters/currency.fulter.js"
Vue.config.productionTip = false;
Vue.use(messagePlugin);
Vue.use(Vuelidate);
Vue.filter('currency', currencyFilter);
Vue.component('Loader', Loader);
let app;



firebase.initializeApp({
  apiKey: "AIzaSyDnJ6PM2fIywe-ieiU3i5B5_NxtSQA4rQQ",
  authDomain: "crmsystem-4b6a7.firebaseapp.com",
  databaseURL: "https://crmsystem-4b6a7.firebaseio.com",
  projectId: "crmsystem-4b6a7",
  storageBucket: "crmsystem-4b6a7.appspot.com",
  messagingSenderId: "588023804289",
  appId: "1:588023804289:web:ec7a91cfdb6882a870b880",
  measurementId: "G-N08SFM1DFD"
});


firebase.auth().onAuthStateChanged( () => {
  if (!app) {
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
});

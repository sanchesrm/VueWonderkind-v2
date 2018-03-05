import Vue from 'vue'
import App from './components/App'
import router from './router'
import VueCookie from 'vue-cookies'
import VuejsDialog from 'vuejs-dialog'
import './fonts.css'

Vue.config.productionTip = false

Vue.use(VueCookie);
Vue.use(VuejsDialog);
Vue.config.productionTip = false

if (!VueCookie.get('contacts')) {
  VueCookie.set('contacts', JSON.stringify([
    {
      fullName: "Lonneke Faber",
      firstName: "Lonneke",
      lastName: "Faber",
      profilePicture: 'data:image/png;base64,',
      email: "lonneke.faber@wonderkind.com",
      mobile: [
        "06-12345678",
        "98-76543210"
      ]
    },
    {
      fullName: "Don Kooijman",
      firstName: "Don",
      lastName: "Kooijman",
      profilePicture: 'data:image/png;base64,',
      email: "don.kooijman@wonderkind.com",
      mobile: [
        "06-12345678"
      ]
    },
    {
      fullName: "Amar Muric",
      firstName: "Amar",
      lastName: "Muric",
      profilePicture: 'data:image/png;base64,',
      email: "amar.muric@wonderkind.com",
      mobile: [
        "06-12345678"
      ]
    }
  ]), -1, "/");
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

import Vue from 'vue'
import Router from 'vue-router'
import App from '../components/App.vue'
import LeftSideMenu from '../components/LeftSideMenu.vue'
import MainContent from '../components/MainContent.vue'
import AddEditContact from '../components/AddEditContact.vue'

Vue.use(Router)

export default new Router({
  base: "",
  mode: 'history',
  routes: [
    {
      path: '/',
      components: {
        leftSideMenu: LeftSideMenu
      }   
    }, {
      path: "/contact/:contact_index",
      components: {
        leftSideMenu: LeftSideMenu,
        mainContent: MainContent
      }
    }, {
      path: "/edit/:contact_index",
      components: {
        mainContent: AddEditContact
      }
    }, {
      path: "/addNewContact",
      components: {
        mainContent: AddEditContact
      }
    }
  ]
})

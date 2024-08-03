import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import axios from 'axios'
import VueAxios from 'vue-axios'

import { createI18n } from 'vue-i18n'


const messages = {
  en: {
    messages: {
      hello: 'hello world',
      menu1:'Name',
      menu2:'Description',
      menu3:'pitchord',
      menu4:'Edit',
      menu5:'Delete',
      menu6:'Action',
      menu7:'Add an article',
      menu8:'Add',
      menu9:'the article name',
      menu10:'Create the article',
      menu11:'Save',
      menu12:'Close',
      menu13:'Modify an article'
    }
  },
  fr: {
    messages: {
      hello:'test',
      menu1:'nom',
      menu2:'description',
      menu3:'image',
      menu4:'editer',
      menu5:'supprimer',
      menu6:'action',
      menu7:'ajouter un article',
      menu8:'ajouter',
      menu9:'nom de article',
      menu10:'creer un article',
      menu11:'Enregistrer',
      menu12:'Fermer',
      menu13:'Modifier un article'
      
    }
  },
}
// 2. Create i18n instance with options
const i18n = createI18n({
  locale: 'fr', // set locale
  fallbackLocale: 'fr', // set fallback locale
  messages, // set locale messages
  // If you need to specify other options, you can set other options
  // ...
})

// const app = createApp({
//   // something vue options here ...
// })


createApp(App).use(router).use(VueAxios, axios).use(i18n)
.mount('#app')







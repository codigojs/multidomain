import { Cookies } from 'quasar'

export default async ({ store }) => {
  let vuex = Cookies.get('vuex')
  store.commit('main/setLang', vuex.main.language)
}

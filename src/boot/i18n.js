import VueI18n from 'vue-i18n'
import messages from 'src/i18n'

export default async ({ app, Vue, store }) => {
  Vue.use(VueI18n)
  let lang = store.state.main.language
  app.i18n = new VueI18n({
    locale: lang,
    fallbackLocale: 'en-us',
    messages
  })
}

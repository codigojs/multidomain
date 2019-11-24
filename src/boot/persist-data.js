import { Cookies } from 'quasar'
import createPersistedState from 'vuex-persistedstate'

export default async ({ store, ssrContext }) => {
  const cookies = process.env.SERVER
    ? Cookies.parseSSR(ssrContext)
    : Cookies
  const options = { path: '/' }
  createPersistedState({
    storage: {
      getItem: key => { JSON.stringify(cookies.get(key)) },
      setItem: (key, value) => { cookies.set(key, value, options) },
      removeItem: key => cookies.remove(key)
    }
  })(store)
}

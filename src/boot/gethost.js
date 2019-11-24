export default async ({ store, ssrContext }) => {
  let lang = 'en-us' // Idioma por defecto es EN
  let host = ssrContext.req.headers.host
  const ext = host.split('.')
  if (ext[2] === 'es:8080') {
    lang = 'es'
  } else if (ext[2] === 'fr:8080') {
    lang = 'fr'
  } else {
    lang = 'en-us'
  }
  store.commit('main/setLang', lang)
}

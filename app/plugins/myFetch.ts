export default defineNuxtPlugin(() => {
  const token = useCookie("token")
  const config = useRuntimeConfig()

  const $myFetch = $fetch.create({
    baseURL: config.public.apiUrl,
    retry: 3,
    onRequest({ options }) {
      if (token.value) {
        // Add Authorization header
        options.headers = new Headers(options.headers || {})
        options.headers.set("Authorization", `Bearer ${token.value}`)
      }
    },
  })

  // Expose to useNuxtApp().$customFetch
  return {
    provide: {
      myFetch: $myFetch,
    },
  }
})

import type { UseFetchOptions } from "nuxt/app"

export function useCustomFetch<T>(
  url: string | (() => string),
  options: UseFetchOptions<T> = {},
) {
  const config = useRuntimeConfig()

  const defaultOptions: UseFetchOptions<T> = {
    baseURL: config.public.apiUrl ?? "/api",
    retry: 3,
    onResponse({ response }) {
      console.log("onResponse details:")

      console.log("response:")
      console.log(response)

      // response._data = new myBusinessResponse(response._data)
    },
    onResponseError({ response }) {
      if (response.status === 401) {
        navigateTo("/login")
      }
    },
  }

  return useFetch(url, {
    ...defaultOptions,
    ...options,
  })
}

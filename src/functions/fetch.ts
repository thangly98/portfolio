async function fetchAPI(url: string, options: RequestInit = {}) {
  return await fetch(url, { ...options, headers: { ...options.headers, 'Content-Type': 'application/json' }, body: JSON.stringify(options.body) })
    .then((response) => {
      if (response.ok) return response.json()
      return Promise.reject(response)
    })
    .then((data) => data)
}

async function GET(url: string, options: Omit<RequestInit, 'method'> = {}) {
  return await fetchAPI(url, { ...options, method: 'GET' })
}

export { GET }

async function fetchAPI(url: string, options: RequestInit = {}) {
  const response = await fetch(url, {
    ...options,
    headers: { ...options.headers, 'Content-Type': 'application/json' },
    body: options.body ? JSON.stringify(options.body) : undefined,
  });

  if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

  return response.json();
}

async function GET(url: string, options: Omit<RequestInit, 'method'> = {}) {
  return await fetchAPI(url, { ...options, method: 'GET' });
}

export { GET };

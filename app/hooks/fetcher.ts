const fetcher: typeof fetch = (input, init?) =>
  fetch(input, init).then((res) => res.json())

export default fetcher

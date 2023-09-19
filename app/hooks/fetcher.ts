import { BareFetcher } from "swr"

const fetcher: BareFetcher<any> = (input) =>
  fetch(input).then((res) => res.json())

export default fetcher

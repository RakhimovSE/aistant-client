import { BareFetcher } from "swr"

const fetcher: BareFetcher = (input) => fetch(input).then((res) => res.json())

export default fetcher

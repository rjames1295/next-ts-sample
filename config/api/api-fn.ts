import { currentUserEndpoint } from "./api-endpoints"

const currentUserQuery = async () => fetch(currentUserEndpoint).then(async res => await res.json())

export { currentUserQuery }

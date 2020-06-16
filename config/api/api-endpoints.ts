import { BASE_API_URL } from "./api-base"

console.log(BASE_API_URL)

const currentUserEndpoint = `${BASE_API_URL}/api/users/current-user`
const userListEndpoint = `${BASE_API_URL}/api/users`

export { currentUserEndpoint, userListEndpoint }

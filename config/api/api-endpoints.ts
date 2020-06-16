import { BASE_API_URL } from "./api-base"

const currentUserEndpoint =
    process.env.NODE_ENV === "development" ? `${BASE_API_URL}/api/users/current-user` : `/api/users/current-user`
const userListEndpoint = process.env.NODE_ENV === "development" ? `${BASE_API_URL}/api/users` : `/api/users`

export { currentUserEndpoint, userListEndpoint }

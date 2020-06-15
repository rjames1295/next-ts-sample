import { GetServerSideProps } from "next"
import { userListEndpoint } from "../../config/api/api-endpoints"
import { UserData } from "../../config/types/UserData"

interface UserListProps {
    userList: UserData;
}

const UserList = ({ userList }: UserListProps) => {
    return (
        <div>
            <pre>{JSON.stringify(userList, null, 2)}</pre>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ params: _params, res }) => {
    const userListResponse = await fetch(userListEndpoint)
    if (userListResponse) {
        const userList = await userListResponse.json()
        return {
            props: { userList }
        }
    } else {
        // Redirect to whatever page on error
        res.writeHead(302, { Location: "/" })
        res.end()
        return
    }
}

export default UserList

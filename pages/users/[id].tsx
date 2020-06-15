import { GetServerSideProps } from "next"
import { userListEndpoint } from "../../config/api/api-endpoints"
import { UserData } from "../../config/types/UserData"

interface UserPageProps {
    userInfo: UserData;
}

const UserPage = ({ userInfo }: UserPageProps) => {
    return (
        <div>
            <pre>{JSON.stringify(userInfo, null, 2)}</pre>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ params, res }) => {
    const { id } = params
    const userInfoResponse = await fetch(`${userListEndpoint}/${id}`)

    if (userInfoResponse && userInfoResponse.ok) {
        const userInfo = await userInfoResponse.json()
        return {
            props: { userInfo }
        }
    } else {
        // Redirect to whatever page on error
        res.writeHead(302, { Location: "/" })
        res.end()
        return
    }
}

export default UserPage

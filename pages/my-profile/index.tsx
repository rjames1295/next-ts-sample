import { useQuery } from "react-query"

import { CircularProgress, Paper, Container } from "@material-ui/core"

import { currentUserQuery } from "../../config/api/api-fn"

const MyProfile = () => {
    const { data, error, isFetching, status } = useQuery("currentUser", currentUserQuery)

    if (isFetching) {
        return (
            <Container>
                <Paper elevation={4}>
                    <CircularProgress />
                </Paper>
            </Container>
        )
    }

    if (error) {
        return (
            <Container>
                <Paper elevation={4}>
                    <div>
                        <pre>{JSON.stringify(error, null, 2)}</pre>
                    </div>
                </Paper>
            </Container>
        )
    }

    return (
        <Container>
            <Paper elevation={4}>
                <div>
                    <pre>{JSON.stringify(data, null, 2)}</pre>
                </div>
            </Paper>
        </Container>
    )
}

export default MyProfile

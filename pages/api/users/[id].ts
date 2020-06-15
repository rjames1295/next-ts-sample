// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next"
import { User } from "../../../db/models"
import { UserData } from "../../../config/types/UserData"

const getUserById = async (req: NextApiRequest, res: NextApiResponse<UserData | any>) => {
    const {
        query: { id }
    } = req

    if (!User.isFakeDataInitialized) await User.initFakeUserData()
    // @ts-ignore
    const currentUser = await User.findByPk(id)

    if (currentUser) {
        res.statusCode = 200
        res.json(currentUser)
        res.end()
    } else {
        res.statusCode = 500
        res.json({ 500: "Internal server error" })
        res.end()
    }
}

export default getUserById

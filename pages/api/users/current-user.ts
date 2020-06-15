// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next"
import { User } from "../../../db/models"
import { UserData } from "../../../config/types/UserData"

const getCurrentUser = async (_req: NextApiRequest, res: NextApiResponse<UserData | any>) => {
    if (!User.isFakeDataInitialized) await User.initFakeUserData()
    const currentUser = await User.findOne({})

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

export default getCurrentUser

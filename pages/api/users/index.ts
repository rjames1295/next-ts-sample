// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next"
import { User } from "../../../db/models"
import { UserData } from "../../../config/types/UserData"

const getUserList = async (req: NextApiRequest, res: NextApiResponse<UserData | any>) => {
    if (!User.isFakeDataInitialized) await User.initFakeUserData()
    const userList = await User.findAll({})

    if (userList) {
        res.statusCode = 200
        res.json(userList)
        res.end()
    } else {
        res.statusCode = 500
        res.json({ 500: "Internal server error" })
        res.end()
    }
}

export default getUserList

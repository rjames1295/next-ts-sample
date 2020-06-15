import { Database } from "../services/Database"
import { Model, DataTypes } from "sequelize"
import faker from "faker"

class User extends Model {
    static isFakeDataInitialized: boolean

    isFakeDataInitialized = false

    static initFakeUserData = async (): Promise<void> => {
        const fakeUserList = []

        for (let i = 0; i < 5; i++) {
            fakeUserList.push({
                id: i + 1,
                username: faker.internet.userName(),
                first_name: faker.name.firstName(),
                last_name: faker.name.lastName(),
                register_date: faker.date.past(),
                profile_picture: faker.random.image()
            })
        }

        return Database.sequelize.sync().then(async () => {
            await User.bulkCreate([...fakeUserList])
            User.isFakeDataInitialized = true
        })
    }
}

User.init(
    {
        id: { type: DataTypes.INTEGER, primaryKey: true },
        username: DataTypes.STRING,
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        register_date: DataTypes.DATE,
        profile_picture: DataTypes.STRING
    },
    { sequelize: Database.sequelize, modelName: "user" }
)

export { User }

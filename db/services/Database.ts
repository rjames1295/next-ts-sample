import { Sequelize } from "sequelize"

class Database {
    static sequelize: Sequelize

    static connect(connectionString: string) {
        Database.sequelize = new Sequelize(connectionString)
    }
}

Database.connect("sqlite::memory")

export { Database }

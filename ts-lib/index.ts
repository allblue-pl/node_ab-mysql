import Database, { type DBConnectionInfo } from "./Database.js";

class abMysql_Class {
    get Database(): typeof Database {
        return Database;
    }

    connect(connectionInfo: DBConnectionInfo): Database {
        let db = new Database(connectionInfo);
        db.connect();

        return db;
    }
}
export default new abMysql_Class();
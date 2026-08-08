import Database, {                       } from "./Database.js";

class abMysql_Class {
    get Database()                  {
        return Database;
    }

    connect(connectionInfo                  )           {
        let db = new Database(connectionInfo);
        db.connect();

        return db;
    }
}
export default new abMysql_Class();
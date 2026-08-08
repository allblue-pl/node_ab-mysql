import Database, { type DBConnectionInfo } from "./Database.js";
declare class abMysql_Class {
    get Database(): typeof Database;
    connect(connectionInfo: DBConnectionInfo): Database;
}
declare const _default: abMysql_Class;
export default _default;

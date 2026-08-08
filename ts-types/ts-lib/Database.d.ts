import { type TS0RawObject } from "@allblue/ts0";
declare class Database {
    #private;
    constructor(connectionInfo: DBConnectionInfo);
    connect(): void;
    disconnect(): void;
    query_Execute_Async(query: string): Promise<boolean>;
    query_Select_Async(query: string): Promise<Array<TS0RawObject>>;
}
export default Database;
export type DBConnectionInfo = {
    host: "string";
    database: "string";
    user: "string";
    password: "string";
};

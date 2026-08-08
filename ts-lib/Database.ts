import { type TS0RawObject } from "@allblue/ts0";
import mysql from "mysql2";

class Database {
    #connectionInfo: DBConnectionInfo;
    #db: mysql.Connection|null;

    constructor(connectionInfo: DBConnectionInfo) {
        this.#db = null;
        this.#connectionInfo = connectionInfo;
    }

    connect(): void {
        if (this.#db !== null)
            this.#db.end();

        this.#db = mysql.createConnection(this.#connectionInfo);
        this.#db.connect();
    }

    disconnect(): void {
        if (this.#db === null)
            return;

        this.#db.end();
        this.#db = null;
    }

    async query_Execute_Async(query: string): Promise<boolean> {
        let result = await this.#query_Async(query);
        
        return result;
    }

    async query_Select_Async(query: string): Promise<Array<TS0RawObject>> {
        return this.#query_Async(query);
    }


    async #query_Async(query: string): Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                if (this.#db === null)
                    throw new Error("DB not connected.");

                this.#db.query(query, function(error, results, fields) {
                    if (error)
                        reject(error);

                    resolve(results);
                });
            } catch (err) {
                reject(err);
            }
        });
    }
}
export default Database;

export type DBConnectionInfo = {
    host: "string",
    database: "string",
    user: "string",
    password: "string",
}
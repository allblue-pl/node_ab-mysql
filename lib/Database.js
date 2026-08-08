import {                   } from "@allblue/ts0";
import mysql from "mysql2";

class Database {
    #connectionInfo                  ;
    #db                       ;

    constructor(connectionInfo                  ) {
        this.#db = null;
        this.#connectionInfo = connectionInfo;
    }

    connect()       {
        if (this.#db !== null)
            this.#db.end();

        this.#db = mysql.createConnection(this.#connectionInfo);
        this.#db.connect();
    }

    disconnect()       {
        if (this.#db === null)
            return;

        this.#db.end();
        this.#db = null;
    }

    async query_Execute_Async(query        )                   {
        let result = await this.#query_Async(query);
        
        return result;
    }

    async query_Select_Async(query        )                               {
        return this.#query_Async(query);
    }


    async #query_Async(query        )               {
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

                                
                   
                       
                   
                       
 
'use strict';

const mysql = require('mysql2');


class Database
{

    constructor(connectionInfo)
    {
        this._db = null;
        this._connectionInfo = connectionInfo;
    }

    connect()
    {
        if (this._db !== null)
            this._db.disconnect();

        this._db = mysql.createConnection(this._connectionInfo);
        this._db.connect();
    }

    disconnect()
    {
        this._db.end();
        this._db = null;
    }

    async query_Execute_Async(query)
    {
        let result = await this._query_Async(query);
        // console.log(result);
        // throw new Error('Not implemented yet.');
        return result;
    }

    async query_Select_Async(query)
    {
        return this._query_Async(query);
    }


    async _query_Async(query)
    {
        return new Promise((resolve, reject) => {
            try {
                this._db.query(query, function(error, results, fields) {
                    if (error)
                        reject(error);

                    resolve(results);
                });
            } catch (err) {
                reject(err);
            }
        });
    }

};
module.exports = Database;

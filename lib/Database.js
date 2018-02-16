'use strict';

const mysql = require('mysql');


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

    query_Execute(query)
    {
        throw new Error('Not implemented yet.');
    }

    query_Select(query)
    {
        return this._query(query);
    }


    _query(query)
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

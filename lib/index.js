'use strict';

const
    Database = require('./Database')
;


class abMysql_Class
{

    get Database() {
        return Database;
    }

    connect(connectionInfo)
    {
        let db = new Database(connectionInfo);
        db.connect();

        return db;
    }

}
module.exports = new abMysql_Class();
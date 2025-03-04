class Database {
    constructor() {
        if (Database.instance) {
            return Database.instance;
        }
        this.connection = "Database connection established";
        Database.instance = this;
    }

    getConnection() {
        return this.connection;
    }
}

const db1 = new Database();
const db2 = new Database();

console.log(db1 === db2); // true (both instances are the same)
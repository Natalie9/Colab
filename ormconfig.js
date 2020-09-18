
module.exports = {
   "type": process.env.DB_TYPE || "mysql",
   "host": process.env.DB_HOST || "mysql669.umbler.com",
   "port": process.env.DB_PORT || 3606,
   "username": process.env.DB_USERNAME || "ipelab",
   "password": process.env.DB_PASSWORD || "postgres",
   "database": process.env.DB_NAME || "colab",
   "synchronize": false,
   "logging": true,
   "entities": [
      "src/models/**/*.ts"
   ],
   "migrations": [
      "src/database/migration/**/*.ts"
   ],
   "subscribers": [
      "src/subscriber/**/*.ts"
   ],
   "cli": {
      "entitiesDir": "src/models",
      "migrationsDir": "src/database/migration",
      "subscribersDir": "src/subscriber"
   }
}
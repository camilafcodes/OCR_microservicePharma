import mysql from "mysql2/promise"
import  config from "config"

const configOptions = {
    host: config.get<string>("DB_HOST"),
    port: config.get<number>("DB_PORT"),
    user: config.get<string>("DB_USER"),
    password: config.get<string>("DB_PASSWORD"),
    database: config.get<string>("DATABASE"),
    
  };
  export const getPoolConnection = () => {
    const connection = mysql.createPool(configOptions);
    return connection;
  };

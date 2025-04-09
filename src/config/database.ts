import { DataSource } from "typeorm"; 
import dotenv from "dotenv";
import { User } from "../entities/user";
import { Product } from "../entities/product";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT!,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  // synchronize: true,
  logging: false,
  entities: [User, Product],
  migrations: [],
  subscribers: [],
});

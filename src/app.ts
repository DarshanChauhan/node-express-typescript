import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoute";
import productRoutes from "./routes/productRoute";
import { AppDataSource } from "./config/database";

dotenv.config();
const app = express();

app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);

AppDataSource.initialize()
  .then(() => {
    console.log("DB Connected");
    app.listen(5000, () =>
      console.log("Server running on http://localhost:5000")
    );
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });

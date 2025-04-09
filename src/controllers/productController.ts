import { Request, Response } from "express"; 
import { Product } from "../entities/product";

export const getProducts = async (_: Request, res: Response) => {
  const products = await Product.find();
  res.json(products);
};

export const createProduct = async (req: Request, res: Response) => {
  const { name: rename, price } = req.body;
  const product = await Product.create({ rename, price }).save();
  res.json(product);
};

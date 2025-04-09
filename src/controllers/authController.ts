import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../entities/user";
import { AppDataSource } from "../config/database";
const userRepo = AppDataSource.getRepository(User);

export const register = async (req: Request, res: Response) => {
  const { email, password, role } = req.body;
  const hashed = await bcrypt.hash(password, 10);
  const user = await userRepo.create({ email, password: hashed, role });
  res.json(user);
};

export const login = async (req:any, res:any) => {
  const { email, password } = req.body;

  const user = await userRepo.findOneBy({ email });
  console.log(user);
  
  if (!user) return res.status(404).json({ message: "User not found" });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(401).json({ message: "Wrong password" });

  const token = jwt.sign(
    { id: user.id, role: user.role },
    process.env.JWT_SECRET!,
    {
      expiresIn: "1d",
    }
  );

  return res.json({ token });
};

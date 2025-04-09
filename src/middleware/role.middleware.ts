import { RequestHandler } from "express";
import { CustomRequest } from "./auth.middleware";

export const authorizeRole = (role: "admin" | "user"): RequestHandler => {
  return (req: CustomRequest, res, next): void => {
    if (req.user?.role !== role) {
      res.status(403).json({ message: "Access denied" });
      return;
    }
    next();
  };
};

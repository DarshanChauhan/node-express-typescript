import { Router } from "express"; 
import { authenticate } from "../middleware/auth.middleware";
import { createProduct, getProducts } from "../controllers/productController";
import { authorizeRole } from "../middleware/role.middleware";

const router = Router();

router.get("/", authenticate, getProducts);
router.post("/", authenticate, authorizeRole("admin"), createProduct);

export default router;

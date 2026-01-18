import { Router } from "express";
import authRoutes from "../modules/auth/auth.routes";

const router = Router();

// 🔹 Feature-wise mounting
router.use("/auth", authRoutes);
// future
// router.use("/users", userRoutes);
// router.use("/products", productRoutes);

export default router;

import { Router } from "express";
import {
  createArticle,
  deleteArticle,
  getArticle,
  getArticleById,
  updateArticle,
} from "../controllers/blog";
import { upload } from "../middleware/multerMiddleware";
import { authMiddlewareDashboard } from "../middleware/authMiddleware";

const router = Router();

router.get("/api/v01/getarticles", authMiddlewareDashboard, getArticle);
router.get(
  "/api/v01/getarticlesid/:id",
  authMiddlewareDashboard,
  getArticleById
);
router.post("/api/v01/articles", upload.single("image"), createArticle); // Créer un article
router.put("/articles/:id", upload.single("image"), updateArticle); // Modifier un article
router.delete("/articles/:id", deleteArticle); // Supprimer un article

export default router;

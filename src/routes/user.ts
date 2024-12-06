import { Router } from "express";
import {
  changePassword,
  createUser,
  getAllUser,
  imgUpload,
  imgUpload2,
  imgUpload3,
  loginUser,
  updateUser,
  verifyUser,
} from "../controllers/user";
import { authMiddlewareDashboard } from "../middleware/authMiddleware";
import path from "path";
import multer from "multer";
const router = Router();

const imgDir = path.resolve(__dirname, "../../public/img");
const storage = multer.diskStorage({
  destination: (req, file, cd) => {
    cd(null, imgDir);
  },
  filename: (req, file, cd) => {
    cd(null, file.originalname);
  },
}); // Stocker l'image en mémoire
const upload = multer({ storage });

router.post("/api/v01/register", createUser);
router.get("/api/v01/alluser", authMiddlewareDashboard, getAllUser);
router.post("/api/v01/verifyUser", verifyUser);
router.post("/api/v01/login", loginUser);
router.put("/api/v01/loginUpdate", updateUser);
router.put("/api/v01/putPass", changePassword);
router.post("/api/v01/imageadress", upload.array("images", 3), imgUpload);

export default router;

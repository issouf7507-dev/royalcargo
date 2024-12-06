import { Router } from "express";

import { authMiddlewareDashboard } from "../middleware/authMiddleware";
import {
  createReservationAnonyme,
  getReservationAnonyme,
  getReservationAnonymeById,
  imgUpload,
  postReservationAnonymeById,
  putReservationAnonyme,
} from "../controllers/reservationanonyme";
import path from "path";
import multer from "multer";

const router = Router();

const imgDir = path.resolve(__dirname, "../../public/imaA");
const storage = multer.diskStorage({
  destination: (req, file, cd) => {
    cd(null, imgDir);
  },
  filename: (req, file, cd) => {
    cd(null, file.originalname);
  },
}); // Stocker l'image en mémoire
const upload = multer({ storage });

router.get(
  "/api/v01/allreservationanonyme",
  //   authMiddlewareDashboard,
  getReservationAnonyme
);
router.post("/api/v01/reservationanonyme", createReservationAnonyme);

router.post("/api/v01/postreservationanonyme", postReservationAnonymeById);
router.put("/api/v01/reservationputanonyme", putReservationAnonyme);
router.get("/api/v01/reservationanonyme/:id", getReservationAnonymeById);

router.post("/api/v01/imageadresanonyme", upload.array("images", 3), imgUpload);
export default router;

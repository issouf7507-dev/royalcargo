import { Router } from "express";

import {
  createReservation,
  getReservation,
  getReservationById,
  getReservationById2,
  putReservation,
} from "../controllers/reservation";
import {
  authMiddlewareDashboard,
  authMiddlewareMobile,
} from "../middleware/authMiddleware";

const router = Router();

router.get("/api/v01/allreservation", authMiddlewareDashboard, getReservation);
router.get(
  "/api/v01/allreservationmobile",
  authMiddlewareMobile,
  getReservation
);
router.post("/api/v01/reservation", createReservation);

router.put("/api/v01/reservationput", putReservation);
router.get("/api/v01/reservation/:id", getReservationById);
router.get("/api/v01/reservation2/:id", getReservationById2);
export default router;

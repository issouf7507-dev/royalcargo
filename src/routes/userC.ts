import { Router } from "express";
import { connectUser, createUser } from "../controllers/userdC";

const router = Router();

router.post("/api/v01/admincreate", createUser);

router.post("/api/v01/adminlog", connectUser);

export default router;

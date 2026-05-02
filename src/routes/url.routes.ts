import { Router } from "express";
import { shortenHandler,statsHandler,redirectHandler, getAl } from "../controllers/url.controller";

const router = Router();

router.post("/shorten", shortenHandler);
router.get("/stats", statsHandler);    
router.get("/all", getAl);
router.get("/:code", redirectHandler);


export default router;
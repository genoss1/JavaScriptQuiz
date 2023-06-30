import express from "express";
import { addPlayer, getAllPlayers } from "./player.controler";

const router = express.Router();

router.get("", getAllPlayers);
router.post("", addPlayer);

export default router;

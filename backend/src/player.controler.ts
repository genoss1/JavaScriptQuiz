import PlayerSchema from "./player.model";
import { Request, Response } from "express";
import mongoose from "mongoose";

export const getAllPlayers = (req: Request, res: Response) => {
  return PlayerSchema.find()
    .sort({ points: -1 })
    .then((players) => {
      res.status(200).json(players);
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};

export const addPlayer = (req: Request, res: Response) => {
  console.log("Dodanie Playeras", req.body);

  PlayerSchema.findOne({ name: req.body.name })
    .then((existingPlayer) => {
      if (existingPlayer) {
        res.status(409).json({ message: "Gracz o tej nazwie już istnieje." });
      } else {
        const player = new PlayerSchema({
          id: new mongoose.Types.ObjectId(),
          ...req.body,
        });

        player
          .save()
          .then((player) => {
            res.status(201).json(player);
          })
          .catch((error) => {
            res.status(500).json({ error });
          });
      }
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};

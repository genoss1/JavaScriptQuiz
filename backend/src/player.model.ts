import mongoose from "mongoose";

export interface Player {
  name: string;
  points: number;
}

export interface PlayerModel extends Player, Document {}

const PlayerSchema = new mongoose.Schema({
  name: { type: String, require: true },
  points: { type: Number, require: true },
});

export default mongoose.model<PlayerModel>("Player", PlayerSchema);

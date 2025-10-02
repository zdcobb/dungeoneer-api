import express from "express";
import type { Request, Response } from "express";
import { handleGetMaps } from "./handlers";

export const mapsRouter = express.Router();

mapsRouter
	.route("/maps")
	.get((req: Request, res: Response) => {
		console.log("Maps route accessed");
		const payload = handleGetMaps();
		res.json(payload);
	})
	.post((req: Request, res: Response) => {
		console.log("Creating a new map with data:", req.body);
		res.status(201).send("Map created");
	});

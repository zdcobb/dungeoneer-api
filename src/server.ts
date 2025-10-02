import express from "express";
import type { Request, Response } from "express";
import { router } from "./api/router";

export const dungeoneer_api = express();
const port = process.env.PORT || 8000;

dungeoneer_api.get("/", (req: Request, res: Response) => {
	res.send("Welcome to the Dungeoneer API!");
});

dungeoneer_api.use(router);

dungeoneer_api.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});

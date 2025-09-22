import express from "express";
import type { Request, Response } from "express";

export const app = express();
const port = process.env.PORT || 8000;

app.get("/", (req: Request, res: Response) => {
	res.send("Welcome to the Dungeoneer API!");
});

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});

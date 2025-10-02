import express from "express";
import { mapsRouter } from "../maps/routes";
// import cors from "cors";

export const router = express.Router({ mergeParams: true });

// Add middleware configuration
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

// Add CORS if needed
// router.use(cors());

// Add error handling middleware
router.use(
	(err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
		console.error(err.stack);
		res.status(500).send("Something broke!");
	}
);

router.use([mapsRouter]);

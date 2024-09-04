import { express } from "express";

let router = express.Router();

router.get(
    "/", function(req, res) {
        console.log("HI!");
        res.status(200).json({message: "HI!"});
    }
);

export default router;
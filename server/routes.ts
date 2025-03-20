import express, { Request, Response, Router } from "express";

const router: Router = express.Router();

// Homepagina
router.get("/", (req: Request, res: Response): void => {
  res.render("index", { title: "Resto Reserve", stylesheet: "style.css" });
});

router.get("/afspraken", (req: Request, res: Response): void => {
    res.render("afspraken", { title: "Resto Reserve", stylesheet: "style.css" })
})

export default router;
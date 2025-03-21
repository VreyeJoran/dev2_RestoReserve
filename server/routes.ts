import express, { Request, Response, Router } from "express";
import { getAllRestaurants, getRestaurantById, Restaurant } from "./services/RestoService";

const router: Router = express.Router();

// Homepagina
router.get("/", async (req: Request, res: Response) => {
    const restaurants: Restaurant[] = await getAllRestaurants();

    res.render("index", { title: "Resto Reserve", stylesheet: "style.css", restaurants: restaurants });
});

router.get("/detail/:id", async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id);
    const restaurant: Restaurant[] = await getRestaurantById(id);

    res.render("detail", { title: "Resto Reserve", stylesheet: "style.css", restaurant: restaurant });
});

export default router;
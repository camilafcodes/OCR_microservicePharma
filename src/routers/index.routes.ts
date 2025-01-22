import Express from "express";
import { ocrPdfRoutes } from "./pdf.routes";
import { ocrImageRoutes } from "./image.routes";

export const routes = () => {
    
    const router = Express.Router();

    router.get("/", (_, res) => {
        res.send("Hello world");
    });
    router.use(ocrPdfRoutes())
    router.use(ocrImageRoutes())


    return router;

    

}
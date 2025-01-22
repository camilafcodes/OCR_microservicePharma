
import { Router } from "express";
import multer from "multer";
import { CtrlImage } from "../controllers/image.controllers";

export const ocrImageRoutes = () => {
    const router = Router();
    const storage = multer.memoryStorage();
    const upload = multer({ storage });
     
    // Endpoint para subir imágenes
    router.post("/images", upload.single("image"),CtrlImage)
     

    return router;
}


 
  



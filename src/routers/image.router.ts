
import { Router } from "express";
import multer from "multer";
import { swaggerOptions } from "../../docs/swagget";
import swaggerUi from "swagger-ui-express";
import { CtrlImage } from "../controllers/image.controllers";

const routeri = Router();

// Configuración de almacenamiento en memoria
const storage = multer.memoryStorage();
const upload = multer({ storage });

routeri.use(`/docs`,swaggerUi.serve, swaggerUi.setup(swaggerOptions))

// Endpoint para subir imágenes
routeri.post("/images", upload.single("image"),CtrlImage)
 
  

export {routeri}

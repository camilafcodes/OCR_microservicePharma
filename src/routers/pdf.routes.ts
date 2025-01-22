
import { ctrPdf } from "../controllers/pdf.controllers";
import express from "express";
import multer from "multer";
import swaggerUi from "swagger-ui-express";
import { swaggerOptions } from "../../docs/swagget";

export const ocrPdfRoutes = () => {

    const router = express.Router();
    const upload = multer({ dest: 'pdfs/' });

    router.post('/pdf', upload.single('pdf'), ctrPdf);

    return router;
}



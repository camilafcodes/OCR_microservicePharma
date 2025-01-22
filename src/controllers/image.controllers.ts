import { Response } from "express";
import { createWorker } from "tesseract.js";
import { ImageRepository } from "../repositories/image.repository";
import { TextoOcr } from "../domain/models/textoOcr";
import { MulterRequest } from "../domain/models/multeReques";





export const  CtrlImage   = async (req:MulterRequest, res:Response):Promise<void> => {
 
    if (!req.file) {
        res.status(400).send("no se cargó ningú archivo");
        return;
    }

    try{
       
        const worker = await createWorker();
        const ret = await worker.recognize(req.file?.buffer); 
        const text = ret.data.text;
        await worker.terminate();

        const imageRepository = new ImageRepository()

        console.log(text)

        const textoOcr: TextoOcr ={
          text:text
        }

        const saveImage = await imageRepository.create(textoOcr)

        if (saveImage) {
          res.status(200).json(saveImage)
        }else {
          res.status(500).send("Error desconocido al procesar la imagen")
        }
         
        
    }catch (error:any) {
       
          res.status(500).send(`error al procesar la imagen : ${error.message}`);
      
      }
}
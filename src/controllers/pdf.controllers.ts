
import { Request,Response } from "express";
import pdfParse from 'pdf-parse';
import fs, {} from 'fs';
import { TextoOcr } from "../domain/models/textoOcr";
import { PdfRepository } from "../repositories/pdf.repository";
import { MulterRequest } from "../domain/models/multeReques";


export const ctrPdf = async (req:MulterRequest,res:Response):Promise<void> => {

    try {

        if(!req.file) {
             res.status(400).json({error: 'no se subio ningún archivo'})
             return
        }

        const filePath = req.file.path
        const pdfBuffer = fs.readFileSync(filePath)

        const data = await pdfParse(pdfBuffer)
        const parsedText:string = data.text
        const textoOcr:TextoOcr = {text:parsedText}

        const pdfRepository = new PdfRepository(); 
        const savedTexto = await pdfRepository.create(textoOcr);
        
        if(savedTexto) {
            res.status(200).json({message:"texto procesado y guardado con exito",data:savedTexto})
        }else {
            res.status(500).json({error:"error al guardar el texto en Base de datos"})
        }

    }catch(error){
        console.error('Error al procesar el PDF',error)
         res.status(500).json({error:'Error al procesar el pdf'})
    }
};



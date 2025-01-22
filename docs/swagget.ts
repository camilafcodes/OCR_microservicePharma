import { imageDoc } from "./image.docs";
import { pdfDoc } from "./pdf.docs";

export const swaggerOptions = {
        openapi:"3.0.3",
        info:{
            title: "Api reconocimiento de texto",
            description: "Micro servicio de reconocimiento de texto",
            version:"1.0",
            constac:{
                name:"PharmaCore Micro Servicio OCR",
                email:"florezaraujo@hotmail.com"
            }
        },
        servers:[
            {
                url:"http://localhost:3002",
                description:"servidor local",
            }
        ],
        paths:{
            "/api/pdf":pdfDoc,
            "/api/images": imageDoc,
        },
        components:{
            schemas:{
                PDF:{
                    type: "object",
                    properties: {
                        body: {type: "array"}
                    },
                    required: ["body"]
                },
                Images:{
                    type: "object",
                    properties: {
                        body: {type: "array"}
                    },
                    required: ["body"]
                }
            }
        }
}
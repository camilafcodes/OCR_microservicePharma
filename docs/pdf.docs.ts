export const pdfDoc = {
    post: {
      tags: ["PDF"],
      summary: "Procesar un archivo PDF",
      description: "Se hace un procesado de un archivo PDF para extraer información.",
      requestBody: {
        required: true,
        content: {
          "multipart/form-data": {
            schema: {
              type: "object",
              properties: {
                pdf: {
                  type: "string",
                  format: "binary",
                  description: "Archivo PDF a procesar."
                }
              },
              required: ["pdf"]  // Corregí el nombre del campo requerido de "file" a "pdf"
            }
          }
        }
      },
      responses: {
        "200": {
          description: "PDF procesado correctamente",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  data: {
                    type: "array",
                    items: {
                      type: "string"
                    },
                    description: "El contenido extraído del PDF."
                  }
                }
              }
            }
          }
        },
        "400": {
          description: "Error al procesar el archivo PDF."
        },
        "500": {
          description: "Error interno del servidor."
        }
      }
    }
  };
  
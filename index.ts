
import express from "express";
import { routes } from "./src/routers/index.routes";
import middleware404 from "./src/middlewares/middlewares";
import cors from "cors";


const app = express();
 app.use(cors())
const port = 3002;

app.use(express.json());


app.use("/api/v1", routes())

app.use(middleware404);

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});




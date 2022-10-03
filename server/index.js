import express from "express";
import db from "./config/db.config.js";
import employeeRoutes from "./routes/index.js";
import cors from "cors";

const app = express();

try {
    await db.authenticate();
    console.log ('Connected');
} catch (error){
    console.error ("Error", error);
}

app.use(cors());
app.use(express.json());
app.use('/employees', employeeRoutes);

app.listen(3000, ()=>console.log('Server UP'))
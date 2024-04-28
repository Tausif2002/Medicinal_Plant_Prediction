import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import colors from "colors";
import connectDB from "./config/db.js";
import plantRoute from "./routes/plantRoute.js";


import cors from "cors";

// config dotenv
dotenv.config();

//database config
connectDB();

//rest object
const app = express();

//middlewares;
const corsOptions ={
   origin:'*', 
   credentials:false,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) 

app.use(express.json());
// app.use(morgan("dev"));


app.use('/api',plantRoute )


//port
const port = process.env.port;
// listen
app.listen(port, () => {
  console.log(`server running on ${port}`.bgCyan.black);
});

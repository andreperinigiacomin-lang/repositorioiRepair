import cookieParser from 'cookie-parser'
import express from "express";
import taskRoutes from "../routes/taskRoutes";

const app = express();
app.use(cookieParser())
app.use(express.json());
app.use(taskRoutes);

export {app};
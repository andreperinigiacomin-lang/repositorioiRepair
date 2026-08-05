import cookieParser from 'cookie-parser';
import express from "express";
import taskRoutes from "../routes/taskRoutes";
import { authRoutes } from '../domains/auth/auth.routes';
import { errorHandler } from '../middlewares/errorHandler';
import clientRoutes from '../domains/clients/client.router';


const app = express();

app.use(express.json());
app.use(cookieParser());
app.use('/auth', authRoutes);
app.use('/task', taskRoutes);
app.use('/clients', clientRoutes);
app.use(errorHandler);

export {app};
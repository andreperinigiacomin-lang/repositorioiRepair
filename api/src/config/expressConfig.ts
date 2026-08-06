import cookieParser from 'cookie-parser';
import express from "express";
import { authRoutes } from '../domains/auth/auth.routes';
import { errorHandler } from '../middlewares/errorHandler';
import clientRoutes from '../domains/clients/client.router';
import serviceOrderRoutes from "../domains/serviceOrder/serviceOrder.router";
import cors from "cors";


const app = express();

app.use(express.json());

app.use(cors({origin: "http://localhost:5173",credentials: true,}));

app.use(cookieParser());
app.use('/auth', authRoutes);
app.use('/clients', clientRoutes);
app.use('/service-orders',serviceOrderRoutes);
app.use(errorHandler);

export {app};
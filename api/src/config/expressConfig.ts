import cookieParser from 'cookie-parser';
import express from "express";
import taskRoutes from "../routes/taskRoutes";
import { authRoutes } from '../domains/auth/auth.routes';

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use('/auth', authRoutes);
app.use('/task', taskRoutes);

export {app};
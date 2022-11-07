import express from 'express';
import { json } from 'body-parser';
import { errorMiddleware } from './middleware/errorMiddleware';



export const app = express();

app.use(json());
app.use(express.json());

app.use(errorMiddleware);
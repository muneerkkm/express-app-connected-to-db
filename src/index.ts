import express, { Express, Request, Response } from 'express';
import { routerV1 } from './routers/v1/app';

import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';

dotenv.config();
const port = process.env.PORT || 3000;

const app: Express = express();


mongoose.connect('mongodb://127.0.0.1:27017/store')
  .then(() => {
    console.error("connecting to the database:")
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });

app.use(cors({ origin: '*' }));

app.get('/', (req: Request, res: Response) => {
  res.json({
    status: 200,
    message: 'Server is running successfully!',
  });
});

app.use('/api/v1', routerV1);

app.listen(port, () =>
  console.log(`app is listening at http://localhost:${port}`)
);

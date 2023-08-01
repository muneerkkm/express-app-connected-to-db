import { Request,Response ,Router } from "express";

const app = Router();




app.get('/', (req: Request, res: Response) => {
  res.json({
    status: 200,
    message: '/db data get successfully',
  });
  
});

app.post('/add', (req: Request, res: Response) => {
  res.json({
    status: 200,
    message: '/db data added successfully!',
  });
});



export const routerV1=app;

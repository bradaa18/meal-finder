import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';    

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.get('/categories', (req: Request, res: Response) => {
    getCategories().then(data => {
        res.json(data);
    });
})

async function getCategories(): Promise<any> {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
    const data = await response.json();
    return data;
}

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
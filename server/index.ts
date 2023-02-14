import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

// request to the server
app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

// request to the server /categories
app.get('/categories', (req: Request, res: Response) => {
    getCategories().then(data => {
        console.log(data);
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.json(data);
    });
})

// request to the server /meal/random
app.get('/meal/random', (req: Request, res: Response) => {
    getRandomMeal().then(data => {
      console.log(data);
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      res.json(data);
    });
});

app.get('/category', (req: Request, res: Response) => {
    getCategory(req.query.name + '').then(data => {
      console.log(data);
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      res.json(data);
    });
});

// request to /meal
app.get('/meal', (req: Request, res: Response) => {
  getMeal(req.query.id + '').then(data => {
    console.log(data);
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.json(data);
  });
});

// API call to get the meal by id
async function getMeal(id: string): Promise<any> {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + id);
    const data = await response.json();
    return data;
}

// API call to get the meal by category
async function getCategory(name: string): Promise<any> {
  console.log(name);
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=' + name);
    const data = await response.json();
    return data;
}

// API call to get the random meal
async function getRandomMeal(): Promise<any> {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
    const data = await response.json();
    return data;
}

// API call to get the categories
async function getCategories(): Promise<any> {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
    const data = await response.json();
    return data;
}

// start the Express server
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

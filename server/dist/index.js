"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
});
app.get('/categories', (req, res) => {
    getCategories().then(data => {
        console.log(data);
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.json(data);
    });
});
app.get('/meal/random', (req, res) => {
    getRandomMeal().then(data => {
        console.log(data);
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.json(data);
    });
});
app.get('/category', (req, res) => {
    getCategory(req.query.name + '').then(data => {
        console.log(data);
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.json(data);
    });
});
function getCategory(name) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(name);
        const response = yield fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=' + name);
        const data = yield response.json();
        return data;
    });
}
function getRandomMeal() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('https://www.themealdb.com/api/json/v1/1/random.php');
        const data = yield response.json();
        return data;
    });
}
function getCategories() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
        const data = yield response.json();
        return data;
    });
}
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

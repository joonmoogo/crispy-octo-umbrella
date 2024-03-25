import { config as configDotenv } from "dotenv";
import express from "express";
import loggerMiddleware from './middleware/logger'

const app = express();
const dotenv = configDotenv();

app.use(loggerMiddleware)


app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(3000,() => {
    console.log(`Server on ${3000} Port`);
});


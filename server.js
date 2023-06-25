const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

const baseUrl = '/calculator'

app.use(express.json());

const baseRouter = express.Router();

baseRouter.get('/greeting', (req, res) => {
    return res.status(200).send('Hello world!');
});

baseRouter.post('/add', (req, res) => {
    {first} = req.params;
    {second} = req.params;

    result = first+second;
    res.json({ "result": result });
});


baseRouter.post('/subtract', (req, res) => {
    {first} = req.params;
    {second} = req.params;

    result = first-second;
    res.json({ "result": result });
});

app.use(baseUrl, baseRouter);
app.listen(PORT, () => {
    console.log("Server running at PORT", PORT);
});

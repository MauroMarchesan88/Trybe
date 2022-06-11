const fs = require('fs').promises;
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

function fetchSimpsons() {
    return fs.readFile('./simpsons.json', 'utf-8')
        .then((data) => JSON.parse(data));
};

function updateSimpsons(newChar) {
    return fs.writeFile('./simpsons.json', JSON.stringify(newChar));
}

app.get('/simpsons', async (_req, res) => {
    try {
        const fetched = await fetchSimpsons();
        return res.status(200).json(fetched);
    } catch (error) {
        return res.status(500).end();
    };
});

app.get('/simpsons/:id', async (req, res) => {
    try {
        const fetched = await fetchSimpsons();
        const char = fetched.find(({ id }) => id === req.params.id);

        if (!char) return res.status(404).json({ message: "simpson not found" });
        return res.status(202).json(char);
    } catch (error) {
        return res.status(500).end();
    }
});

app.post('/simpsons', async (req, res) => {
    try {
        const { id, name } = req.body;
        const fetched = await fetchSimpsons();
        const exists = fetched.some((char) => char.id === id);
        if (exists) return res.status(409).json({ message: 'id already exists' });
        fetched.push({ id, name });
        await updateSimpsons(fetched);
        return res.status(204).end();
    } catch (error) {
        return res.status(500).end();
    }
});

app.listen(3001, () => {
    console.log('Aplicação ouvindo na porta 3001');
});
const express = require('express');
const os = require('os');

const app = express();

const PORT = 4000;

app.get('/', (req, res) => {
    const timestamp = Date.now();
    const host = os.hostname();

    return res.status(200).json({ host, timestamp });
});

app.listen(PORT, () => {
    console.log(`server started on ${PORT}`);
});
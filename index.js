const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const bodyParser = require('body-parser');
const cors = require('cors');

if (!process.env.MONGODB_URI) {
    console.error('❌ MONGODB_URI environment variable is not set. Set it in Railway → Variables. Server will not work correctly without it.');
}

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const pairRouter = require('./inconnu');
app.use('/', pairRouter);

app.listen(port, () => {
    console.log(`🚀 Server running on port ${port}`);
});

module.exports = app;

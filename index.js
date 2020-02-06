const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const gamesRoutes = require('./routes/games')

// Middleware(i)
app.use(express.json());

// First Route
app.get('/', (req, res) => {
    console.log('Welcome to a new Game World !!!');
});

app.use('/api/games', gamesRoutes);

app.listen(port, () => {
    console.log(`Listening to games api on port: ${port}`)
});

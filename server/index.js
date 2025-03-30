const express = require('express');
const cors = require('cors');
const logsRouter = require('./routes/logs');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

//Mount the logs router
app.use('/logs', logsRouter);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
}
);
import express from 'express';
import bodyParser from 'body-parser';

import usersRouter from './routes/users.js';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use('/users', usersRouter);

app.get('/', (req, res) => res.send('Hello from Homepage!'));


app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));
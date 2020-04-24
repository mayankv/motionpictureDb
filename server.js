const express = require('express');
require('dotenv').config();

const data = require('./routes/api/data');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use('/api', data);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

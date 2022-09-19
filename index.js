const app = require('./api/config/expressConfig');
require('dotenv').config();

const port = process.env.PORT;

app.listen(port, console.log(`servidor rodando na porta ${port}`));
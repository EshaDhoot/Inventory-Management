const express = require('express');
const app = express();
const {PORT} = require('./config/serverConfig');
const apiRoutes = require('./routes/index');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./openapi.yaml');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/', apiRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

async function start() {
  try {
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  } catch (err) {
    console.error('Failed to start:', err);
    process.exit(1);
  }
}

start();

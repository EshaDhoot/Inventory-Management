const express = require('express');
const app = express();
const {PORT} = require('./config/serverConfig');
const apiRoutes = require('./routes/index');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', apiRoutes);

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

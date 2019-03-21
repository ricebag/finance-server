const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const helmet = require('helmet');

// const router = require('./router');
// const { errorHandler } = require('./middleware');

module.exports = () => {
    const app = express();

    app.use(cors());
    app.use(helmet());
    app.use(bodyParser.json())

    app.get('/', (req, res) => res.send("welcome to the finance site"))
    // app.use('/api', router())

    // app.use(errorHandler())

    return app;
}
import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';

import { default as router } from './router'
import { errorHandler } from './middleware'

export default () => {
    const app = express();

    app.use(cors());
    app.use(helmet());
    app.use(bodyParser.json())

    app.get('/', (req, res) => res.send("welcome to the finance site"))
    app.use('/api', router())

    app.use(errorHandler())

    return app;
}
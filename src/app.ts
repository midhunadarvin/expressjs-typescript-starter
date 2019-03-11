import * as express from 'express';
import * as path from 'path';
import * as cookieParser from 'cookie-parser';
import * as morgan from 'morgan';

import indexRouter from './routes/index';
import usersRouter from './routes/users';
import sequelize from './sequelize';
import initializeDB from './config/initialize-database';
class App {
    public app: express.Application;
    constructor() {
        this.app = express();
        this.app.use(morgan('combined'));
        this.app.use(cookieParser() as express.RequestHandler);
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use(express.static(path.join(__dirname, 'public')));
        this.app.use('/', indexRouter);
        this.app.use('/users', usersRouter);

        sequelize
            .authenticate()
            .then(() => {
                initializeDB();
                console.log('Connection has been established successfully.');
            })
            .catch(err => {
                console.error('Unable to connect to the database:', err);
            });
    }
}
export default new App().app;




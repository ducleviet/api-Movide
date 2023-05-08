import express from 'express';
import morgan from 'morgan';
import methodOverride from 'method-override';
import cors from 'cors';
import { engine } from 'express-handlebars';
import route from './routes/index.js';
import connect from './config/db/index.js';

connect();
const app = express();
const port = 3000;

app.use(cors());
app.options('*', cors());

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

app.use(methodOverride('_method'));

// connect to db

app.use(express.static('./src/public'));

// HTTP logger
app.use(morgan('combined'));
//Templet engine
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', './src/resources/views');

//Router init
route(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

import express from 'express';
import exphbs from 'express-handlebars';
import cookieParser from 'cookie-parser';
import path from 'path';
import routes from './routes';

const app = express();
// express setup
app.engine('.hbs', exphbs({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', path.join(process.cwd(), 'build', 'views'));

// express use
app.use(express.static(path.join(process.cwd(), 'build')));
app.use(cookieParser());
app.use(routes);


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
});
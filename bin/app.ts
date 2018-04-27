import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as methodOverride from 'method-override';
import * as errorhandler from 'strong-error-handler';
import {pets} from '../server/controllers/Pets';
import {orders} from '../server/controllers/Orders';

export const app = express();

const expressSwagger = require('express-swagger-generator')(app);

let options = {
    swaggerDefinition: {
        info: {
            description: 'This is a sample server',
            title: 'Swagger',
            version: '1.0.0',
        },
        host: 'localhost:3000',
        basePath: '/v1',
        produces: [
            "application/json",
            "application/xml"
        ],
        schemes: ['http', 'https']
    },
    basedir: __dirname, //app absolute path
    files: ['../server/controllers/**/*.*'] //Path to the API handle folder
};
expressSwagger(options)


app.use(express.static(__dirname + '/../client/app'));
// middleware for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

// middleware for json body parsing
app.use(bodyParser.json());

app.use(bodyParser.json({ type: 'application/vnd.api+json' }));  // parse application/vnd.api+json as json
app.use(methodOverride());

// enable corse for all origins
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Expose-Headers", "x-total-count");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH");
  res.header("Access-Control-Allow-Headers", "Content-Type,authorization");

  next();
});

app.use('/pets', pets);
app.use('/orders', orders);

app.get('*', function (req, res) {
    res.sendFile('index.html', {root: "./client/app"});
});

app.use(errorhandler({
  debug: process.env.ENV !== 'prod',
  log: true,
}));
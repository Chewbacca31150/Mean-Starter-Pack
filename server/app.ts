import { json, urlencoded } from "body-parser";
import * as compression from "compression";
import * as express from "express";
import * as path from "path";

import { UserController } from "./controllers/user.controller";
import { connect } from "mongoose";
import { attachControllers } from "@decorators/express";

const app: express.Application = express();

app.disable("x-powered-by");

app.use(json());
app.use(compression());
app.use(urlencoded({ extended: true }));

const apiRouter = express.Router();
app.use('/api', apiRouter);

// api routes
attachControllers(apiRouter,
  [
    UserController,
    // add your controllers here
  ]);


if (app.get("env") === "production") {

  // in production mode run application from dist folder
  app.use(express.static(path.join(__dirname, "/../client")));
}

// catch 404 and forward to error handler
app.use((req: express.Request, res: express.Response, next) => {
  const err = new Error("Not Found");
  next(err);
});

// production error handler
// no stacktrace leaked to user
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {

  res.status(err.status || 500);
  res.json({
    error: {},
    message: err.message,
  });
});


let uri = 'mongodb://localhost:27017/meanstarterpack';

connect(uri, (err) => {
  if (err) {
    console.log(err.message);
  }
  else {
    console.log('Connected to MongoDb');
  }
});


export { app };

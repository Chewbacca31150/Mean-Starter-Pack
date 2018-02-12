
#  Mean Starter Pack

## GENERAL

This repo is a starter pack to work with MEAN (MongoDB, Express, Angular 2+, NodeJs) with extras (flex-layout, mongoose, decorators, material design, migrations). The links for these packages can be found further in this readme.

## Installation

- Install node: https://nodejs.org/dist/v8.9.0/node-v8.9.0-x64.msi
- Install mongodb: https://www.mongodb.com/download-center?jmp=tutorials&_ga=2.216733855.867775932.1502387021-1711869881.1500135373#community
- Add mongodb/**/bin in your environment variables

## NPM general

In case the app doesn't work: 
npm i -g ts-node nodemon typescript

## Install / Development

### install dependencies
`npm install`

### start server
`npm run start`
It will start the client and the server

**CAUTION !!!!**
YOU HAVE TO ADD MONGO'S BIN IN YOUR ENVIRONMENT VARIABLES, ELSE YOU CAN'T LAUNCH THE FOLLOWING COMMANDS

### ON MAC
Change the mongodb cmd in package.json > prestart (add `prestart` before `scripts` option)
Example: mongod --dbpath /Users/misaki/dev/mean_starter_pack/data/db/ &

### ON WINDOWS
Chamge the mongodb cmd in package.json > prestart (add `prestart` before `scripts` option)
Example: start /b mongod

## Client url: http://localhost:4200
## Application ( express ) API: http://localhost:4300


## MongoDB

- To create a db `use meanstarterpack`
- To create a collection, just insert a document in it `db.user.insert({firstName:'Misaki', lastName: 'Tobisawa'})`

## DB migration

Mean Starter Pack uses `mongodb-migrations`.
How to create a migration? Use 
`node ./node_modules/mongo-migrate/index.js -runmm create migration`
To send a migration: 
`node ./node_modules/mongo-migrate/index.js -runmm up [file]`
And to remove a migration: 
`node ./node_modules/mongo-migrate/index.js -runmm down [file]`

Please use it when you create a new collection.

## Client

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.6.

## CREATE COMPONENT

`ng g component components/mycomponent --module app`

## DOCS

### FRONT

#### Angular

https://angular.io/docs

#### Material Design

https://material.angular.io/components/categories

#### Angular flex layout

https://github.com/angular/flex-layout

### BACK

#### Mongoose

- http://mongoosejs.com/

#### Decorators

- To read: https://medium.com/google-developers/exploring-es7-decorators-76ecb65fb841

- Decorators for mongoose, express, socket, common, di, etc.: https://github.com/serhiisol/node-decorators

## DEBUG

Launch `mongod`
If you can't run tsc, `npm i -g tsc-node typescript`
To deploy the client: `ng serve --proxy-config proxy.conf.json`
Make sure to run the command `tsc` in your command prompt before debugging and after deploying the client since the client removes the tsc folder
Then, click on the nodemon configuration


## Errors

If you can't debug, rerun `tsc` in your command prompt
Note: You can't debug and start your project, so close the server before debugging

## Build

`npm run build`
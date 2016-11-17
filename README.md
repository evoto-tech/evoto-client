# evoto-client

## Example .env file
Create a `.env` file in the root of the project. It should look something like - 
```
CHAIN_HOST=<host ip>
CHAIN_PORT=<host port>
CHAIN_USERNAME=<username>
CHAIN_PASSWORD=<password>
CHAIN_NAME=<chainname>
NODE_ENV=development
```

## Multichain processes
Create a `multichain` folder in the project with at least the `multichaind.exe` executable in.

## Install
- Node v4+
- NPM v2+ or Yarn

Either run `npm install` or `yarn`.

## Running
Run `npm run watch` in one window and `npm start` in another.

`npm run watch` runs the webpack dev server to allow hot reloading of the client side js.

`npm start` runs the electron shell which uses this client side js to render the react app.

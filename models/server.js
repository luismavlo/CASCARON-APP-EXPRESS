const express = require("express");
const cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 4000;

    this.paths = {
      eats: "api/v1/eats",
    };

    this.middlewares();

    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  routes() {}

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Running on port ${this.port}`);
    });
  }
}

module.exports = Server;

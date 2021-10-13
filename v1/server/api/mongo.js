const mongoose = require("mongoose");
const config = require("../config");

const connect = config.mongo.connect;

function _connect() {
  mongoose.connect(connect, function (err) {
    if (err) {
      // console.error("mongodb connection error", err);
    }
    // console.log("mongodb connected");
  });
}
_connect();
mongoose.connection.on("disconnected", _connect);

module.exports = mongoose;

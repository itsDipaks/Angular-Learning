const mongoose = require("mongoose");

mongoose.set("strictQuery", false);
const Connection = mongoose.connect("mongodb://itsdipakpawar4206:dipak4206@ac-u04exws-shard-00-00.gdzyqj0.mongodb.net:27017,ac-u04exws-shard-00-01.gdzyqj0.mongodb.net:27017,ac-u04exws-shard-00-02.gdzyqj0.mongodb.net:27017/?ssl=true&replicaSet=atlas-ut4uec-shard-0&authSource=admin&retryWrites=true&w=majority");

module.exports = {Connection};
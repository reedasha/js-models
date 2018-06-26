#!/usr/bin/env node

var amqp = require("amqp-ts");

var connection = new amqp.Connection('amqp://guest:guest@localhost:5672');
var exchange = connection.declareExchange("ExchangeName");
var queue = connection.declareQueue("QueueName");
queue.bind(exchange);

connection.completeConfiguration().then(() => {
    // the following message will be received because
    // everything you defined earlier for this connection now exists
    var msg2 = new amqp.Message("Test2");
    exchange.send(msg2);
});
//
// var amqp = require('amqplib/callback_api');
//
//
// amqp.connect('amqp://guest:guest@localhost:5672', function(err, conn) {
//   conn.createChannel(function(err, ch) {
//     var q = 'hello';
//
//     ch.assertQueue(q, {durable: false});
//     var jsonObj = {
//       description: "My Description",
//       email: "shisyr2106@gmail.com"
//     }
//     ch.sendToQueue(q, new Buffer(JSON.stringify(jsonObj)));
//     console.log(" [x] Sent 'Hello World!'");
//   });
// });

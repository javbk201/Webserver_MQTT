const express = require('express');
const mqtt = require('mqtt');

const app = express();
const client =  mqtt.connect('mqtt://localhost:1883');

app.use(express.static(__dirname + '/public/'));

app.post('/register', (req, res) => {
  client.on('message', function (topic, message) {
    // message is Buffer
    if (message) {

    }
    message.toString()
  });
}

app.listen('3000', function () {
    console.log('Servidor web escuchando en el puerto 3000');
});


client.on('connect', function () {
  client.subscribe('temperatura', function (err) {
    if (!err) {
      console.log("subcrito al topic");
    }
  })
});

  client.on('message', function (topic, message) {
    // message is Buffer
    console.log(message.toString())
    //client.end()
  });

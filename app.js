const express = require('express');

let app = express();

app.use(express.static(__dirname + '/public'));

console.log('Listening on ' + (process.env.PORT || 3000));
app.listen(process.env.PORT || 3000);
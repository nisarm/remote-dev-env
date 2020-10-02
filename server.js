const express = require('express');
const app = express();

app.set('port', (process.env.PORT || 11001));

app.use(express.static(__dirname + '/src'));

app.get('/', function(request, response) {
  response.render('src/');
});

app.listen(app.get('port'), function() {
  console.log(`App URL ...... http://localhost:${app.get('port')}`);
});
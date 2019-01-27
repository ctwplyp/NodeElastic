const express = require('express');
const app = express();
const port = process.env.PORT || 5001;

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

//create a POST route

var bodyParser     =        require("body-parser");
app.use(bodyParser.json()); // support json encoded bodies
// POST http://localhost:8080/api/users
// parameters sent with 
app.post('/data', function(req, res) {
   res.write(request.body.user)
    console.log(data);
});

// create a GET route


/*app.get('/express_backend', (req, res) => {
	
var client = new elasticsearch.Client({
  host: 'localhost:9200',
  log: 'trace'
});

client.ping({
  requestTimeout: 30000,
}, function (error) {
  if (error) {
    console.error('elasticsearch cluster is down!');
  } else {
    console.log('All is well');
  }
});

client.search
({
  index: 'bill',
  type: '_doc',
  body: {
  	"_source": "items",
    query: {
      match: {
        childId: 123456 
      }
    }
  }
}).then(function (resp) {
    var hits = resp.hits.hits;
    res.send({ express: hits });
}, function (err) {
    console.trace(err.message);
});  
});*/


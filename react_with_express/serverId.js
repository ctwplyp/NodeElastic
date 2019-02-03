const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

var elasticsearch = require('elasticsearch');

app.use(express.json());
//var bodyParser    = require("body-parser");
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended:true}));
// create a GET route
app.get('/express_backend/', (req, res) => {
	
var client = new elasticsearch.Client({
  host: 'localhost:9200',
  log: 'trace'
});

console.log(req.body);
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
        childId:  req.body.id
      }
    }
  }
}).then(function (resp) {
    var hits = resp.hits.hits;
    res.send({ express: hits });
}, function (err) {
    console.trace(err.message);
});  
});
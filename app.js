var express = require('express')
var cors = require('cors')
var app = express()
var fs = require('fs')

app.use(cors())

function respondToRequest(req, res) {
    var headers = 'Headers received: ' + JSON.stringify(req.headers) + '\n';

    console.log(headers)
    
    try {
        fs.appendFileSync('d:\\home\\out.txt', headers);
    } catch(err) {
        console.error(err);
    }

    res.send(headers)
}

app.get('/*', function (req, res) {
    respondToRequest(req, res);
})
  
app.post('/*', function (req, res) {
    respondToRequest(req, res);
})
  
app.listen(process.env.PORT || 8088);

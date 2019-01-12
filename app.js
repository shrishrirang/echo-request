var express = require('express')
var cors = require('cors')
var app = express()
var fs = require('fs')

app.use(cors())


// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('hello world')
})

app.post('/call/postwithoutbody/:id', function (req, res) {
    var headers = JSON.stringify(req.headers) + '\n';

    console.log(headers)
    
    try {
        fs.appendFileSync('d:\\home\\out.txt', headers);
    } catch(err) {
        // An error occurred
        console.error(err);
    }

    res.send(headers)
  })
  
app.listen(process.env.PORT || 8088);

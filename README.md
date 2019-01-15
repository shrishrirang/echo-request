# echo-request

Responds to incoming GET and POST requests with the received headers.

## Build

```bash
npm install
set PORT=<port> # This is optional, default port is 8088
node app.js
```

## Sample usage

### GET

Request
```bash
curl -X GET http://localhost:8088/simple-get
```

Response
```bash
Headers received: {"host":"localhost:8088","user-agent":"curl/7.58.0","accept":"*/*"}
```

### POST without body, without Content-Length

Request
```bash
curl -X POST http://localhost:8088/post-without-body-without-content-length
```

Response
```bash
Headers received: {"host":"localhost:8088","user-agent":"curl/7.58.0","accept":"*/*"}
```

### POST without body, Content-Length=0

Request
```bash
curl -X POST http://localhost:8088/post-without-body-with-zero-content-length -d ''
```

Response
```bash
Headers received: {"host":"localhost:8088","user-agent":"curl/7.58.0","accept":"*/*","content-length":"0","content-type":"application/x-www-form-urlencoded"}
```

### POST with body

Request
```bash
curl -X POST http://localhost:8088/post-with-body -d 'test-body'
```

Response
```bash
Headers received: {"host":"localhost:8088","user-agent":"curl/7.58.0","accept":"*/*","content-length":"9","content-type":"application/x-www-form-urlencoded"}
```

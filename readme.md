# AUTHORIZATION API ASSIGNMENT
## STEPS
-------------

## Build

Install the dependencies and devDependencies and start the server.

```sh
npm install
npm start
```
 ## Test
 
```sh
npm test
```


 ## ENDPOINTS
 
### Home
```sh
curl http://localhost:3000/
```

### Read Me 
```sh
curl http://localhost:3000/read_me
```

### Get Token
```sh
curl http://localhost:3000/get_token/:code
```

### Get Data
```sh
curl -H "Authorization: jwt __TOKEN__" http://localhost:3000/get_data
```


### For creating Key.pem file
```sh
openssl req -newkey rsa:2048 -new -nodes -x509 -days 3650 -keyout key.pem -out cert.pem
```
### Test Token
`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJib2R5IjoiQVVUSE9SSVpFRCIsImlhdCI6MTYyMjg4MTEwNn0.4uoy-N-XOw6VmAJkw94RbBqXWCtCZpi540zrbb-fp18`
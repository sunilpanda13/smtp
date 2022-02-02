# Simple Mail transfer protocol
Simple mail transfer protocol using node.js, express and nodemailer.


## How to run ?

You need node.js to start the server. You can install it from here [Node.js](https://nodejs.org/en/download/).

Install required packages.
```
npm i
```
After cloning the repo rename the env.txt to
```
.env
```
Then replace these lines in .env file with required values.
```
email = "Your-Email"
password = "Your-Email's password"
```
To start the server
```
node app.js
```
If you have nodemon installed globally you can use
```
nodemon app
```

## API Reference

#### Get all items

```http
GET /api/mail
{
    "to" : "email address",
    "subject" : "Subject",
    "html" : "HTML code"
}
```

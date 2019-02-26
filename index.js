const express = require('express')
const app = express()
const port = 3000

const loop = require('./loop')
const fizzbuzz = require('./fizzbuzz')


app.listen(port,() => console.log ('App is now listening on port'+port))

app.get('/',(req,res)=>res.send('Hello World'))

app.get('/loop', loop.loop)

app.get('/fizzbuzz', fizzbuzz.fizzbuzz)
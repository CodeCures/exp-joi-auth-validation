const express = require('express');
const app = express()

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'ejs')

const appRouter = require('./routes/app');
const userRouter = require('./routes/users');

app.use(appRouter)
app.use('/users/', userRouter)

app.listen(3000)
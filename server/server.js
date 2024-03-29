const express = require('express')
const app = express()
require("dotenv").config({ path: __dirname + "/.env" });
const { PORT, CLIENT_URL } = require('./constants')
const cookieParser = require('cookie-parser')
const passport = require('passport')
const cors = require('cors')

// import passport middleware
require('./middlewares/passport-middleware')

// initialize middlewares

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: CLIENT_URL, credentials: true
}))
app.use(passport.initialize())

// import routes

const authRoute = require('./routes/auth')

// initialize routes

app.use('/api', authRoute)

// app start

const appStart = () => {
    try {
        app.listen(PORT, () => {
            console.log(`This app is running on http://localhost:${PORT}`)
        })
    } catch (error) {
        console.log(`Error: ${error.message}`)
    }
}

appStart()
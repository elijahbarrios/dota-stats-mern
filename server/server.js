const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
const path = require('path')

const connectDB = require('./config/db')

connectDB()

const league = require('./services/league')

app.get('/api/league', league.leagueData)

// serve static assets for production

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('../client/build'))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../', 'client', 'build', 'index.html'))
    })
}

app.listen(3001, () => {
    console.log("Server now running on port 3001")
})
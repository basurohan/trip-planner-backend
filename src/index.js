import express from 'express'
import bodyParser from 'body-parser'

import getTripSummaries from './repositories/tripSummaryRepositoy'
import getTripDetailsById from './repositories/tripDetailsByIdRepository'

const app = express()

app.use(bodyParser.json())

// Get all trips - summary only
app.get('/trip-summary', (req, res) => {
    res.send(getTripSummaries())
})

// Get trip details by id
app.get('/trip-details/:id', (req, res) => {

    const toReturn = getTripDetailsById(req.params.id)

    if(!toReturn) {
        res.send('Trip not found')
    }

    res.send(toReturn)
})


app.listen('3000', () => console.log('Listening on port: 3000'))
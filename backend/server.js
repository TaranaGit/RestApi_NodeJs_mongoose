require('dotenv').config()
const express = require ('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workout')
const app = express()

//middleware
app.use(express.json())
app.use((req,res,next) =>{
    console.log(req.path, req.method)
    next()
})

// .......Routes
app.use('/api/workout', workoutRoutes)

// connect to db
mongoose.connect(process.env.MONG_URI)
   
    .then(() =>{

        // listen for request
        app.listen(4000, ()=> {
        console.log('Connected to db & listening on port',process.env.PORT)
        })
    })

    .catch((err) => {
        console.log(err)
    })

process.env
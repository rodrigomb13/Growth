const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()

app.use(cors());

app.use(express.json())

const personRoutes = require('./routes/personRoutes')

app.use('/person',personRoutes)

const postsRoutes = require('./routes/postsRoutes')
app.use('/posts',postsRoutes)

app.get('/', (req,res) =>{

    res.json({message: 'Express'})
})


mongoose.connect('mongodb+srv://rodrigo13:rodrigo1313@cluster0.qavim.mongodb.net/bancodaapi?retryWrites=true&w=majority')
    .then(() => {
        console.log('Conectamos ao Mongo')
    })
    .catch((err) => console.log(err))


app.listen(5000)
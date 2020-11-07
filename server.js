require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const userRouter = require('./routes/userRouter')
const domainRouter = require('./routes/domainRouter')
const smtpRouter = require('./routes/smtpRouter')
const recipientsRouter = require('./routes/recipientsRouter')
const templatesRouter = require('./routes/templatesRouter')
const campaignsRouter = require('./routes/campaignsRouter')
const logsRouter = require('./routes/logsRouter')

const path = require('path')


const app = express()
app.use(cors())
app.use(express.json())


// Routes
app.use('/users', userRouter)
app.use('/api/domain', domainRouter)
app.use('/api/smtp',smtpRouter)
app.use('/api/recipients',recipientsRouter)
app.use('/api/templates',templatesRouter)
app.use('/api/campaigns',campaignsRouter)
app.use('/api/logs',logsRouter)

// Connect to MongoDB
const URI = process.env.MONGODB_URI
mongoose.connect(URI, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err =>{
    if(err) throw err;
    console.log('Connected to MongoDB')
})


// Below MongoDB and  Above Listen Sever
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
    app.get('*', (req, res) =>{
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
    });
}




// Listen Server
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log('Server is running on port', PORT)
})
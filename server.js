const express = require('express')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
const stripe = require('stripe')(process.env.STRIPE)

dotenv.config()

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'client/build')))


app.get('*',(req,res) => {
    res.sendFile(path.join(__dirname,'client/build','index.html'))
})


app.post('/payment',(req,res)=>{
    
    const body ={
        source:req.body.token,
        amount:req.body.amount,
        currency:'usd'

    }
    
    stripe.charges.create({

    })
})





const port = 3154 ||  process.env.PORT

app.listen(port,() => {
    console.log("server started");
})
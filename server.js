require("dotenv").config()
const express = require("express")
const port =process.env.PORT ||2070
// const port = 2070
const app = express()
const myRoute = require("./Router/Router")
const mongoose = require("mongoose")


const url = "mongodb://localhost/Schools"

// const url =process.env.ATLASURL
mongoose.connect(url).then(()=>{
    console.log(`Successfully connected dbs...`)
}).catch((error)=>{
    console.log(error.message)
})


app.get('/', (req, res)=>{
    res.status(200).json({message: `running on port ${port}`})
})

// app.get('/', (req, res)=>{
//     res.status(200).json({
//         status: "server connected",
//         message: port
//     })
// })

app.use(express.json())
app.use("/api", myRoute)


app.listen(port, ()=>{
    console.log(`listening to port ${port}`)
})
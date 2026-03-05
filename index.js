const express = require('express')
const app = express()
const cors= require('cors')
const connectDB = require('./config/db.js')
const userRouter = require('./routes/userRoute.js')
const productRoutes = require("./routes/productRoutes");
const dotenv = require('dotenv')
dotenv.config()

connectDB()

app.use(express.static('uploads/'))
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use(express.json())


app.use('/api',userRouter)
app.use("/api/products", productRoutes);

app.get('/',(req,res)=>{
    res.send("Api is Calling")
})

const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`server is running http://localhost:${PORT}`)
})
// import express from 'express'
// import bodyParser from 'body-parser'
// import mongoose from 'mongoose'
// import carTypeRouter from './api/routers/carType.js'
// import degemRouter from './api/routers/degem.js'
// import cors from 'cors'
// const app =express()
// const port = 3001

// app.use(bodyParser.json())
// app.use(cors())

// mongoose.connect(`mongodb://localhost:27017/RentCar_DB`)
//     .then(() => {
//         console.log('connect to mongoDB! 👍😁');
//     })
//     .catch(err => {
//         console.log({ error: err.message });
//     })
// app.use('/carType', carTypeRouter)
// app.use('/degem',degemRouter)
// app.listen(port, () => {
//     console.log(`my application is listening on http://localhost:${port}`);
// })
import renderApi from '@api/render-api';
import express from "express";
import dotenv from 'dotenv'
import cors from 'cors'
import bodyParser from "body-parser";

const app = express()
const port =process.env.PORT || 3000
dotenv.config()
app.use(cors())
app.use(bodyParser.json())

app.get('', (req, res) => {
  renderApi.auth(process.env.RENDER_API_KEY);
  renderApi.listServices({ includePreviews: 'true', limit: '20' })
    .then( data  => {return res.status(200).send({data: data})})
    .catch(err => console.error(err));
})

app.listen(port, () => {
  console.log(`my application is listening on http://localhost:${port}`);
})
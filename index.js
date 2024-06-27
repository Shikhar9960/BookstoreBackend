import express from 'express';
import dotenv from 'dotenv';
import mongoose from "mongoose";
import bookroute from "./route/book.route.js"
import userRoute from "./route/user.route.js"
import cors from "cors";
const app = express();

app.use(cors())
app.use(express.json())


dotenv.config();

const port = process.env.PORT || 4000;
const URI = process.env.mongoDBURI;

//conect to mongodb

try {
  mongoose.connect(URI, {
    useNewUrlparser: true,
    useUnifiedTopology: true
  })
  console.log()
} catch (error) {
  console.log("error: ", error)
}

app.use("/book" , bookroute)
app.use("/user", userRoute)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

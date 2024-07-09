import express from 'express';
import { db, dbConnect } from './database/db.js';

const app = express()
const port = 3369

app.get('/', (req, res) => {
  res.send('Hello World!')
})

await dbConnect()

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
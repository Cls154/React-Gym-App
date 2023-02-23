import express from "express";
import cors from 'cors';

import exerciseRoutes from './routes/exercises.js';

const PORT = process.env.PORT || 8080;
const app = express();

app.use(cors());
app.use('/exercises', exerciseRoutes);

app.get('/', (req, res) => {
  res.status(200).send('Api online');
})

app.all('*', (req, res) => {
  res.status(404).json({ errorMsg: 'Resource doesn\'t exist '});
})

const startServer = () => {
  try {
    app.listen({port: PORT}, () => console.log(`server running on port: ${PORT}`))
  } catch (err) {
    console.error({ errorMsg: `The follow error has occurred: ${err}` });
  }
}

startServer();
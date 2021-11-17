import express from 'express';
import cors from 'cors';
import { postSignIn, postSignUp } from './controllers/registration';

const app = express();
app.use(express.json());
app.use(cors());

app.post('/sign-up', (req, res) => postSignUp(req, res));
app.post('/sign-in', (req, res) => postSignIn(req, res));

app.get('/health', (req, res) => {
  res.sendStatus(200);
});

export default app;

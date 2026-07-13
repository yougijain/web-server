import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.send('Hello to the web. - aliens.');
});

router.get('/about', (req, res) => {
  res.send('This is a web programming course. - aliens');
});

router.get('/hello', (req, res) => {
  res.send('We are learning about how to build a server right now. - aliens');
});

router.get('/hello/:name', (req, res) => {
  const name = req.params.name;
  res.send(`Hello, ${name}!`);
});

router.get('/repeat/:word', (req, res) => {
  const word = req.params.word;
  res.send(`${word} ${word} ${word}`);
});

router.get('/count', (req, res) => {
  const from = parseInt(req.query.from) || 1;
  const to = parseInt(req.query.to) || 10;
  res.send(`Counting from ${from} to ${to}.`);
});

export default router;

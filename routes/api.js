import { Router } from 'express';

const router = Router();

router.get('/info', (req, res) => {
  res.json({
    name: 'hello-web',
    version: '1.0.0'
  });
});

router.get('/error', (req, res) => {
  res.status(400).send('Bad request.');
});

router.get('/status', (req, res) => {
  res.json({ status: 'ok', uptime: process.uptime() });
});

export default router;

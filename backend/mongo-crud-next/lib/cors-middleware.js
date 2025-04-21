// lib/cors-middleware.js
import Cors from 'cors';
import initMiddleware from './init-middleware';

// Allow only specific origins and methods
const cors = initMiddleware(
  Cors({
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    origin: 'http://localhost:3001', // allow your frontend origin
    credentials: true,
  })
);

export default cors;

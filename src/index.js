import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 8081;

// Middlewares
app.use(express.json());
app.use(cors);

// Routes

// Error handling middleware

//Server running
app.listen(port, () => {
  console.log(`Serevr is running on port ${port}`);
});

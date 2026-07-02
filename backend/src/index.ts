import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import { createServer } from 'http';
import { Server } from 'socket.io';

dotenv.config();

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
    credentials: true,
  },
});

const PORT = process.env.PORT || 3001;

// Middleware
app.use(helmet());
app.use(cors());
app.use(morgan('combined'));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Rate limiting
const limiter = rateLimit({
  windowMs: parseInt(process.env.RATE_LIMIT_WINDOW || '15') * 60 * 1000,
  max: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || '100'),
});
app.use(limiter);

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running', timestamp: new Date() });
});

app.get('/api', (req, res) => {
  res.json({
    message: 'Welcome to AI All-in-One Platform API',
    version: '1.0.0',
    endpoints: {
      health: '/api/health',
      chat: '/api/chat',
      code: '/api/code',
      website: '/api/website',
      design: '/api/design',
      content: '/api/content',
      documents: '/api/documents',
      auth: '/api/auth',
    },
  });
});

// Chat endpoint
app.post('/api/chat', (req, res) => {
  const { message } = req.body;
  res.json({
    reply: `Bạn nói: "${message}". Đây là câu trả lời từ API. Chưa được tích hợp AI thực.`,
  });
});

// Code endpoint
app.post('/api/code/generate', (req, res) => {
  const { description, language } = req.body;
  res.json({
    code: `// Generated code for: ${description}\n// Language: ${language}\nconsole.log('Hello World');`,
  });
});

// Website endpoint
app.post('/api/website/create', (req, res) => {
  const { description } = req.body;
  res.json({
    html: `<html>\n  <body>\n    <h1>${description}</h1>\n  </body>\n</html>`,
  });
});

// Design endpoint
app.post('/api/design/generate', (req, res) => {
  res.json({
    message: 'Design generation coming soon',
  });
});

// Content endpoint
app.post('/api/content/write', (req, res) => {
  const { topic, type } = req.body;
  res.json({
    content: `This is a ${type} about ${topic}. Content generation coming soon.`,
  });
});

// Document endpoint
app.post('/api/documents/process', (req, res) => {
  res.json({
    message: 'Document processing coming soon',
  });
});

// Socket.io events
io.on('connection', (socket) => {
  console.log(`User connected: ${socket.id}`);

  socket.on('chat:message', (data) => {
    io.emit('chat:message', { ...data, timestamp: new Date() });
  });

  socket.on('disconnect', () => {
    console.log(`User disconnected: ${socket.id}`);
  });
});

// Error handling
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({
    error: 'Internal Server Error',
    message: process.env.NODE_ENV === 'development' ? err.message : undefined,
  });
});

// Start server
httpServer.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
  console.log(`📡 API available at http://localhost:${PORT}/api`);
});

export default app;

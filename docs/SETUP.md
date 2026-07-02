# 🚀 Installation & Setup

## Prerequisites
- Node.js >= 18
- npm or yarn
- Docker & Docker Compose (optional)
- PostgreSQL (or use Docker)
- Redis (optional)
- Supabase account
- API keys for: OpenAI, Gemini, Claude, DeepSeek

## Quick Start with Docker

### 1. Clone Repository
```bash
git clone https://github.com/hoangthien01022010-dotcom/Thiendeptraintg.git
cd Thiendeptraintg
```

### 2. Setup Environment
```bash
cp .env.example .env.local
```

Update `.env.local` with your values:
```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key

# AI APIs
OPENAI_API_KEY=sk-...
GEMINI_API_KEY=...
CLAUDE_API_KEY=...
DEEPSEEK_API_KEY=...

# Database
POSTGRES_PASSWORD=your_password
```

### 3. Run with Docker Compose
```bash
docker-compose up -d
```

This will start:
- Frontend: http://localhost:3000
- Backend: http://localhost:3001
- Database: localhost:5432
- Redis: localhost:6379

### 4. Access the Application
- 🌐 Frontend: http://localhost:3000
- 📚 API Docs: http://localhost:3001/api

## Manual Setup

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

### Backend Setup
```bash
cd backend
npm install
npm run dev
```

### Database Setup
```bash
# Using Supabase
1. Create a Supabase project
2. Copy connection string
3. Run migrations
```

## Environment Variables

See `.env.example` for all available variables.

Key variables:
- `NEXT_PUBLIC_API_URL` - Backend API URL
- `NEXT_PUBLIC_SUPABASE_URL` - Supabase project URL
- `JWT_SECRET` - JWT signing key
- `OPENAI_API_KEY` - OpenAI API key

## Development

### Code Style
```bash
# Format code
npm run format

# Lint
npm run lint

# Type check
npm run type-check
```

### Database Migrations
```bash
# Create migration
npm run migration:create

# Run migrations
npm run migration:run
```

## Deployment

### Frontend (Vercel)
```bash
npm install -g vercel
vercel
```

### Backend (Docker)
```bash
docker build -t ai-platform-backend ./backend
docker run -p 3001:3001 ai-platform-backend
```

## Troubleshooting

### Port already in use
```bash
# Kill process on port
lsof -ti:3000 | xargs kill -9
lsof -ti:3001 | xargs kill -9
```

### Database connection error
- Check `DATABASE_URL` environment variable
- Ensure PostgreSQL is running
- Check database credentials

### API connection error
- Check `NEXT_PUBLIC_API_URL`
- Ensure backend is running
- Check CORS settings

## Support
For issues and questions, please open an issue on GitHub.

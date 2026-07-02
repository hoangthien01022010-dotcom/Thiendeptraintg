# 🏗️ Architecture

## System Architecture

```
┌─────────────────────────────────────────────────────────┐
│                     Frontend (Next.js)                   │
│  React Components + Tailwind CSS + Framer Motion        │
└────────────────┬────────────────────────────────────────┘
                 │ HTTP/WebSocket
┌────────────────▼────────────────────────────────────────┐
│                  Backend (Express)                       │
│  API Routes + Controllers + Business Logic              │
└────────────────┬────────────────────────────────────────┘
                 │ SQL
┌────────────────▼────────────────────────────────────────┐
│            Database (PostgreSQL)                        │
│  Users, Projects, Chats, Subscriptions, Usage           │
└─────────────────────────────────────────────────────────┘
```

## Tech Stack

### Frontend
- **Framework**: Next.js 14
- **Language**: TypeScript
- **UI**: React + Tailwind CSS
- **State**: Zustand + React Query
- **Animations**: Framer Motion
- **HTTP Client**: Axios
- **Real-time**: Socket.io
- **Auth**: Supabase Auth

### Backend
- **Runtime**: Node.js
- **Framework**: Express
- **Language**: TypeScript
- **Database**: PostgreSQL
- **Cache**: Redis
- **Auth**: JWT + Supabase
- **Real-time**: Socket.io
- **File Upload**: Multer + AWS S3

### External Services
- **LLMs**: OpenAI, Gemini, Claude, DeepSeek
- **Database**: Supabase/PostgreSQL
- **Authentication**: Supabase Auth
- **File Storage**: AWS S3 / Supabase Storage
- **Payment**: Stripe
- **Email**: SendGrid/SMTP

## Database Schema

### Tables
- `users` - User accounts
- `chat_sessions` - Chat session records
- `chat_messages` - Chat messages
- `projects` - User projects
- `subscriptions` - Subscription plans
- `usage_logs` - API usage tracking

## API Flow

1. **Request** → Frontend sends HTTP/WebSocket request
2. **Middleware** → CORS, Authentication, Rate limiting
3. **Routing** → Route to appropriate controller
4. **Processing** → Execute business logic
5. **AI Integration** → Call external AI APIs
6. **Database** → Store/retrieve data
7. **Response** → Return to frontend

## Module Structure

### Frontend Modules
```
src/
├── app/              # Next.js app directory
├── components/       # React components
├── lib/              # Utilities & helpers
├── styles/           # Global styles
└── public/           # Static assets
```

### Backend Modules
```
src/
├── routes/           # API routes
├── controllers/      # Request handlers
├── models/           # Database models
├── middleware/       # Express middleware
├── utils/            # Helper functions
└── services/         # Business logic
```

## Authentication Flow

1. User registers/logs in
2. Supabase creates user account
3. JWT token returned
4. Token stored in localStorage
5. Token sent with each API request
6. Backend validates token
7. Request processed with user context

## Real-time Communication

- Socket.io for real-time features
- Message updates
- Project changes
- Notifications

## Caching Strategy

- Redis for session data
- Query caching
- User data caching
- API response caching

## Security

- HTTPS only
- JWT authentication
- CORS protection
- Rate limiting
- SQL injection prevention
- XSS protection (Helmet)
- CSRF tokens

## Scalability

- Horizontal scaling with Docker
- Load balancing
- Database indexing
- Cache layer (Redis)
- CDN for static assets
- Microservices ready

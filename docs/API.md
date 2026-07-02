# 📚 API Documentation

## Base URL
```
http://localhost:3001/api
```

## Authentication
Tất cả các request cần token JWT trong header:
```
Authorization: Bearer {token}
```

## Endpoints

### Health Check
```
GET /api/health
```
Response:
```json
{
  "status": "Server is running",
  "timestamp": "2026-07-02T10:00:00Z"
}
```

### Chat

#### Send Message
```
POST /api/chat
Content-Type: application/json

{
  "message": "Hello, how are you?",
  "session_id": "uuid",
  "model": "gpt-3.5-turbo"
}
```

Response:
```json
{
  "reply": "I'm doing great, thank you for asking!",
  "tokens_used": 45
}
```

### Code Generation

#### Generate Code
```
POST /api/code/generate
Content-Type: application/json

{
  "description": "Create a function to calculate fibonacci",
  "language": "python"
}
```

Response:
```json
{
  "code": "def fibonacci(n):\n    ..."
}
```

### Website Creation

#### Create Website
```
POST /api/website/create
Content-Type: application/json

{
  "description": "Create a landing page for a tech startup"
}
```

Response:
```json
{
  "html": "<html>...</html>",
  "css": "body { ... }",
  "project_id": "uuid"
}
```

### Design Generation

#### Generate Design
```
POST /api/design/generate
Content-Type: application/json

{
  "type": "logo",
  "description": "Modern AI platform logo",
  "style": "minimalist"
}
```

Response:
```json
{
  "image_url": "https://...",
  "design_id": "uuid"
}
```

### Content Writing

#### Write Content
```
POST /api/content/write
Content-Type: application/json

{
  "type": "blog",
  "topic": "AI trends in 2026",
  "length": 1000,
  "tone": "professional"
}
```

Response:
```json
{
  "content": "...",
  "word_count": 1000
}
```

### Document Processing

#### Process Document
```
POST /api/documents/process
Content-Type: multipart/form-data

File: document.pdf
```

Response:
```json
{
  "text": "Extracted text...",
  "pages": 10,
  "document_id": "uuid"
}
```

## Error Handling

All errors follow this format:
```json
{
  "error": "Error type",
  "message": "Detailed error message",
  "code": "ERROR_CODE"
}
```

## Rate Limiting
- 100 requests per 15 minutes
- Header: `X-RateLimit-Remaining`

## Webhooks
Supported events:
- `chat.completed`
- `project.created`
- `project.updated`
- `project.deleted`

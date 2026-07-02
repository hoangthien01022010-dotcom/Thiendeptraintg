# 🆘 Troubleshooting Guide

## Common Issues

### 1. Port Already in Use

**Error**: `EADDRINUSE: address already in use :::3000`

**Solution**:
```bash
# Find and kill process
lsof -ti:3000 | xargs kill -9
lsof -ti:3001 | xargs kill -9

# Or use different ports
PORT=3002 npm run dev
```

### 2. Database Connection Error

**Error**: `Error: connect ECONNREFUSED 127.0.0.1:5432`

**Solution**:
```bash
# Check if PostgreSQL is running
sudo systemctl status postgresql

# Start PostgreSQL
sudo systemctl start postgresql

# Or use Docker
docker-compose up postgres

# Check DATABASE_URL in .env
```

### 3. Environment Variables Not Loaded

**Error**: `Cannot read property of undefined`

**Solution**:
```bash
# Copy example file
cp .env.example .env.local

# Update all variables
nano .env.local

# Restart dev server
npm run dev
```

### 4. API Connection Error

**Error**: `Error: Network Error` or `CORS error`

**Solution**:
```bash
# Check backend is running
curl http://localhost:3001/api/health

# Check NEXT_PUBLIC_API_URL
echo $NEXT_PUBLIC_API_URL

# Check CORS in backend
# See .env.local CORS_ORIGIN
```

### 5. Module Not Found

**Error**: `Cannot find module '@/components/...'`

**Solution**:
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Check tsconfig.json paths
cat tsconfig.json | grep -A 5 paths

# Restart dev server
npm run dev
```

### 6. Git Conflicts

**Error**: `Merge conflict` or `Conflicts` in merge

**Solution**:
```bash
# Abort merge
git merge --abort

# Or resolve conflicts
# Edit conflicted files
# Mark as resolved
git add .
git commit -m "Merge: resolve conflicts"
```

### 7. Memory Issues

**Error**: `JavaScript heap out of memory`

**Solution**:
```bash
# Increase heap size
NODE_OPTIONS=--max-old-space-size=4096 npm run dev

# Or use more memory
NODE_OPTIONS=--max-old-space-size=8192 npm run build
```

### 8. Docker Issues

**Error**: `Cannot connect to Docker daemon`

**Solution**:
```bash
# Start Docker
sudo systemctl start docker

# Or on Mac
open /Applications/Docker.app

# Check status
docker --version
```

### 9. Supabase Connection

**Error**: `Supabase auth error` or `Invalid URL`

**Solution**:
```bash
# Check credentials
echo $NEXT_PUBLIC_SUPABASE_URL
echo $NEXT_PUBLIC_SUPABASE_ANON_KEY

# Test connection
curl -X GET $NEXT_PUBLIC_SUPABASE_URL

# Update .env.local with correct values
```

### 10. TypeScript Errors

**Error**: `Type 'X' is not assignable to type 'Y'`

**Solution**:
```bash
# Type check
npm run type-check

# Fix errors in your code
# Or use 'any' type temporarily

# Restart dev server
npm run dev
```

## Performance Issues

### Slow Build
```bash
# Clear cache
rm -rf .next
npm run build

# Use SWC instead of Babel
# Already enabled in next.config.js
```

### Slow API Requests
```bash
# Check backend logs
NODE_ENV=development npm run dev

# Enable query logging in database
# See database logs

# Add indexes to frequently queried fields
```

### High Memory Usage
```bash
# Monitor memory
node --inspect=9229 src/index.ts

# Use Chrome DevTools
# chrome://inspect
```

## Debugging

### Browser DevTools
```bash
# Open DevTools
F12 or Ctrl+Shift+I

# Check Console for errors
# Check Network for API calls
# Check Storage for localStorage/cookies
```

### Server Debugging
```bash
# Enable debug logs
DEBUG=* npm run dev

# Use Node inspector
node --inspect=9229 src/index.ts
# Then open chrome://inspect
```

### Database Debugging
```bash
# Connect to PostgreSQL
psql -U postgres -d aiplatform

# Run queries
SELECT * FROM users;
```

## Getting Help

1. Check documentation at `/docs`
2. Search GitHub issues
3. Check Discord/Community
4. Create new issue with details
5. Email: support@aiplatform.com

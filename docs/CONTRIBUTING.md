# 🎯 Contributing

## Getting Started

1. Fork the repository
2. Clone your fork
3. Create a feature branch
4. Make your changes
5. Submit a pull request

## Development Workflow

### 1. Create Branch
```bash
git checkout -b feature/your-feature-name
```

### 2. Make Changes
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Make your changes

# Format code
npm run format

# Lint
npm run lint

# Type check
npm run type-check
```

### 3. Commit
```bash
git add .
git commit -m "feat: Add your feature"
```

### 4. Push
```bash
git push origin feature/your-feature-name
```

### 5. Create Pull Request
- Go to GitHub
- Click "New Pull Request"
- Fill in description
- Submit

## Commit Messages

Follow conventional commits:
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation
- `style:` - Code style
- `refactor:` - Code refactoring
- `test:` - Tests
- `chore:` - Maintenance

## Code Style

- Use TypeScript
- Follow ESLint rules
- Format with Prettier
- Use meaningful variable names
- Add comments for complex logic

## Testing

```bash
# Run tests
npm test

# Run with coverage
npm run test:coverage

# Watch mode
npm run test:watch
```

## Pull Request Guidelines

- Clear description of changes
- Reference related issues
- Include screenshots if UI changes
- Test on multiple browsers
- Ensure all tests pass
- No console errors/warnings

## Code Review

- Two approvals required
- All CI checks must pass
- No merge conflicts
- Code quality maintained

## Reporting Issues

### Bug Report
- Clear description
- Steps to reproduce
- Expected behavior
- Actual behavior
- Screenshots/videos
- Environment info

### Feature Request
- Clear description
- Use case
- Expected behavior
- Alternative solutions
- Additional context

## Communication

- GitHub Issues for bugs
- GitHub Discussions for ideas
- Email for security issues
- Discord for quick questions (if available)

## License

By contributing, you agree that your contributions will be licensed under MIT License.

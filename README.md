# 🚀 FAANG-Ready Portfolio

A modern, full-stack portfolio application showcasing real-time systems, clean architecture, and production-ready practices. Built with Next.js, TypeScript, MongoDB, and Docker.

## ⭐ What Makes This FAANG-Ready

### 🏗️ Architecture & System Design
- **Modular structure**: Separation of concerns (lib, pages, components, types)
- **API middleware**: Custom error handling, CORS, and HTTP method routing
- **Database schemas**: Mongoose models with proper indexing
- **Scalable API routes**: Ready for horizontal scaling

### ⚡ Real-Time Features
- **GitHub API Integration**: Auto-fetch and display your repos
- **WebSocket Ready**: Socket.io support for live features
- **Event-Driven**: Visitor tracking and notification system

### 🎯 Performance Optimizations
- **Code Splitting**: Next.js automatic route code splitting
- **Image Optimization**: Optimized image loading
- **Static Generation & ISR**: Incremental Static Regeneration
- **Multi-stage Docker builds**: Minimal production image size

### 🔒 Security
- **TypeScript**: Type-safe development
- **Environment variables**: Secure secret management
- **Non-root Docker user**: Container security
- **CORS & Headers**: Security headers middleware

### 📊 Monitoring & Analytics
- **Visitor tracking**: Track page views and referrers
- **Contact form pipeline**: Capture recruiter inquiries
- **Error logging**: Comprehensive error handling

## 🛠 Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes, Node.js
- **Database**: MongoDB with Mongoose
- **DevOps**: Docker, Docker Compose
- **Real-Time**: Socket.io (ready to implement)
- **Testing**: Jest + React Testing Library

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ or Docker

### Local Development (with Docker)

```bash
# Clone the repo and install dependencies
git clone <your-repo>
cd portfolio
npm install

# Create .env file
cp .env.example .env

# Setup GitHub integration (optional)
# 1. Generate GitHub PAT: https://github.com/settings/tokens
# 2. Add to .env: GITHUB_TOKEN=<your_token>

# Start with Docker Compose
docker-compose up

# Or run locally
npm run dev
```

Then visit: http://localhost:3000

### Environment Variables

```env
# MongoDB
MONGODB_URI=mongodb://root:rootpassword@mongodb:27017/portfolio?authSource=admin

# GitHub API (optional but recommended)
GITHUB_TOKEN=your_github_token_here
GITHUB_USERNAME=your_github_username

# Application
NODE_ENV=development
NEXT_PUBLIC_API_URL=http://localhost:3000
JWT_SECRET=change_in_production
```

## 📁 Project Structure

```
.
├── pages/
│   ├── api/                    # API routes (backend)
│   │   ├── contact.ts          # Contact form
│   │   ├── github.ts           # GitHub repos
│   │   └── projects.ts         # Portfolio projects
│   ├── index.tsx               # Home page
│   └── _app.tsx                # App wrapper
├── lib/
│   ├── db.ts                   # MongoDB connection
│   ├── models.ts               # Mongoose schemas
│   ├── github.ts               # GitHub API client
│   └── middleware.ts           # API middleware
├── types/
│   └── index.ts                # TypeScript interfaces
├── styles/
│   └── globals.css             # Tailwind styles
├── components/                 # Reusable components
├── public/                     # Static assets
└── Dockerfile                  # Production container
```

## 🔌 API Routes

### GET `/api/github`
Fetch paginated GitHub repos (auto-fetched on home page)

```bash
curl http://localhost:3000/api/github
```

### GET/POST `/api/projects`
Manage portfolio projects

```bash
# Get all projects
curl http://localhost:3000/api/projects

# Get featured projects only
curl http://localhost:3000/api/projects?featured=true

# Add new project
curl -X POST http://localhost:3000/api/projects \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Project Name",
    "description": "Short description",
    "link": "https://...",
    "tags": ["React", "Node.js"],
    "featured": true,
    "github": "https://github.com/..."
  }'
```

### POST `/api/contact`
Submit contact form (for recruiter pipeline)

```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Recruiter Name",
    "email": "recruiter@example.com",
    "subject": "Job Opportunity",
    "message": "We love your portfolio!"
  }'
```

## 🎨 Customization

### Update Profile Information

Edit [pages/index.tsx](pages/index.tsx):
```tsx
<h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-accent bg-clip-text text-transparent">
  Your Name Here
</h1>
```

### Add More Projects

Add to MongoDB or POST to `/api/projects`:
```typescript
{
  title: "Project Name",
  description: "Brief description",
  longDescription: "Long form description",
  link: "https://live-demo.com",
  github: "https://github.com/username/repo",
  image: "/images/project.png",
  tags: ["React", "Node.js", "MongoDB"],
  featured: true,
  live: "https://live-url.com",
  metrics: {
    users: 10000,
    performance: "Lighthouse 98/100",
    downloads: 500
  }
}
```

### Custom Colors

Edit [tailwind.config.ts](tailwind.config.ts):
```typescript
colors: {
  accent: '#00d9ff',        // Change cyan to your color
  'accent-secondary': '#00b8cc',
}
```

## 🚢 Deployment

### Deploy to Render

1. Push code to GitHub
2. Create new "Web Service" on [Render](https://render.com)
3. Connect GitHub repo
4. Set environment variables:
   ```
   NODE_ENV=production
   MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/portfolio
   GITHUB_TOKEN=your_token
   GITHUB_USERNAME=your_username
   JWT_SECRET=secure_random_string
   ```
5. Deploy!

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to AWS

```bash
# Build Docker image
docker build -t portfolio:latest .

# Push to ECR
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin <account-id>.dkr.ecr.us-east-1.amazonaws.com
docker tag portfolio:latest <account-id>.dkr.ecr.us-east-1.amazonaws.com/portfolio:latest
docker push <account-id>.dkr.ecr.us-east-1.amazonaws.com/portfolio:latest

# Deploy with ECS, Fargate, or EKS
```

## 🧪 Testing

```bash
# Run tests
npm test

# Watch mode
npm test:watch

# Type checking
npm run type-check
```

## 📈 Features to Showcase on Interviews

1. **Full-stack development** - Frontend, backend, database, DevOps
2. **System design** - Architecture decisions, scalability
3. **Real-time features** - WebSocket implementation
4. **Clean code** - TypeScript, proper error handling
5. **DevOps** - Docker, deployment automation
6. **GitHub integration** - Working with 3rd-party APIs
7. **Performance** - Optimizations, metrics
8. **Best practices** - Security, monitoring, testing

## 🔐 Production Checklist

- [ ] Update GitHub token in `GITHUB_TOKEN`
- [ ] Change `JWT_SECRET` to random string
- [ ] Add SMTP credentials for email
- [ ] Setup MongoDB Atlas (free tier available)
- [ ] Add custom domain
- [ ] Setup SSL/HTTPS
- [ ] Add analytics (Google Analytics, Mixpanel)
- [ ] Setup monitoring (Sentry, LogRocket)
- [ ] Add CI/CD pipeline (.github/workflows)
- [ ] Setup error tracking

## 🐛 Troubleshooting

### MongoDB Connection Issues
```bash
# Check MongoDB is running
docker-compose ps

# View MongoDB logs
docker-compose logs mongodb

# Verify connection string
# Default: mongodb://root:rootpassword@mongodb:27017/portfolio?authSource=admin
```

### Next.js Build Errors
```bash
# Clear Next.js cache
rm -rf .next

# Rebuild
npm run build
```

### GitHub API Rate Limiting
- Authenticated requests: 5,000/hour (more with token)
- Update time between fetches or cache results

### Port Already in Use
```bash
# Change port in docker-compose.yml
# Or kill process using port 3000
lsof -i :3000
kill -9 <PID>
```

## 📚 Resources & Learning

- [Next.js Docs](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [MongoDB Docs](https://docs.mongodb.com/)
- [Docker Best Practices](https://docs.docker.com/develop/dev-best-practices/)
- [System Design Interview](https://www.educative.io/courses/grokking-system-design)
- [Performance Web Vitals](https://web.dev/vitals/)

## 🚀 Next Steps

1. **Add authentication** - JWT with MongoDB sessions
2. **Implement caching** - Redis for performance
3. **Add analytics** - Track portfolio performance
4. **Blog section** - Write about your projects
5. **Real-time notifications** - WebSocket updates
6. **CI/CD pipeline** - GitHub Actions automation
7. **Email notifications** - Nodemailer for contacts
8. **Admin dashboard** - Manage projects and messages

## 📞 Questions for Interviews

When asked about your portfolio, mention:

1. **Architecture**: "I built this with clean separation of concerns - API routes handled by Next.js, MongoDB for data persistence, and TypeScript for type safety."

2. **Scalability**: "The Docker setup allows horizontal scaling. I can run multiple instances behind a load balancer."

3. **Real-time features**: "I've integrated GitHub's API to auto-fetch repositories, and the app is ready for WebSocket implementation for live updates."

4. **DevOps**: "I containerized the entire application with Docker and Docker Compose, making it deployable to any cloud platform."

5. **Performance**: "I optimized with Next.js code splitting, static generation where possible, and multi-stage Docker builds for minimal image size."

## 📄 License

MIT License - feel free to use this as your portfolio!

---

**⭐ Pro Tips:**
- Keep this README updated with your real information
- Replace sample colors/fonts with your personal brand
- Add your actual GitHub username to `.env`
- Deploy early and get feedback from experienced engineers
- Continuously update with new projects and learnings

Good luck landing that FAANG job! 🎯

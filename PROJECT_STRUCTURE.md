# 📚 Project Structure Reference

## Quick File Guide

### 🎯 Entry Points & Configuration

| File | Purpose |
|------|---------|
| `package.json` | Dependencies, scripts, and project metadata |
| `.env.example` | Environment variables template |
| `next.config.ts` | Next.js configuration (security headers, images) |
| `tsconfig.json` | TypeScript compiler options |
| `tailwind.config.ts` | Tailwind CSS theme customization |
| `jest.config.js` | Unit test configuration |
| `.eslintrc.json` | Code linting rules |
| `.prettierrc` | Code formatting rules |

### 🔧 Core Application

#### Pages (User-facing routes)
| File | Endpoint | Purpose |
|------|----------|---------|
| `pages/index.tsx` | `/` | Home page with hero, projects, skills, contact |
| `pages/_app.tsx` | all | App wrapper, global styles import |

#### API Routes (Backend endpoints)
| File | Endpoint | Methods | Purpose |
|------|----------|---------|---------|
| `pages/api/hello.ts` | `/api/hello` | GET | Health check / Welcome endpoint |
| `pages/api/github.ts` | `/api/github` | GET | Fetch public GitHub repos |
| `pages/api/projects.ts` | `/api/projects` | GET, POST | Manage portfolio projects |
| `pages/api/blog.ts` | `/api/blog` | GET, POST | Blog posts management |
| `pages/api/contact.ts` | `/api/contact` | GET, POST | Contact form submissions |
| `pages/api/track.ts` | `/api/track` | POST | Visitor tracking |
| `pages/api/analytics.ts` | `/api/analytics` | GET | Portfolio analytics data |

### 📦 Libraries & Utilities

#### Type Definitions
| File | Purpose |
|------|---------|
| `types/index.ts` | TypeScript interfaces for all data models |

#### Database
| File | Purpose |
|------|---------|
| `lib/db.ts` | MongoDB connection with caching |
| `lib/models.ts` | Mongoose schemas (Project, BlogPost, Visitor, etc.) |

#### API Utilities  
| File | Purpose |
|------|---------|
| `lib/middleware.ts` | Reusable API middleware (CORS, error handling, methods) |
| `lib/utils.ts` | Helper functions (validation, sanitization) |
| `lib/github.ts` | GitHub API client |

#### React Utilities
| File | Purpose |
|------|---------|
| `lib/hooks.ts` | Custom React hooks (useAsync, useForm, usePageTracker) |

### 🎨 React Components

| File | Purpose |
|------|---------|
| `components/ProjectCard.tsx` | Reusable project display card |
| `components/GithubRepoList.tsx` | GitHub repos list with loading/error states |
| `components/ContactForm.tsx` | Contact form with validation and submission |
| `components/SkillSection.tsx` | Skills grid display |

### 🎯 Styles

| File | Purpose |
|------|---------|
| `styles/globals.css` | Global Tailwind styles and custom CSS |

### 🐳 DevOps

| File | Purpose |
|------|---------|
| `Dockerfile` | Multi-stage production image |
| `docker-compose.yml` | Local development stack (Next.js + MongoDB) |
| `.dockerignore` | Files to exclude from Docker image |
| `.github/workflows/ci-cd.yml` | GitHub Actions CI/CD pipeline |

### 📖 Documentation

| File | Purpose |
|------|---------|
| `README.md` | Main project documentation |
| `INTERVIEW.md` | Interview preparation guide |
| `PROJECT_STRUCTURE.md` | This file - directory reference |

---

## 📂 Directory Tree

```
.
├── .github/
│   └── workflows/
│       └── ci-cd.yml                 # GitHub Actions pipeline
├── components/
│   ├── ContactForm.tsx               # Form with validation
│   ├── GithubRepoList.tsx            # Repos display
│   ├── ProjectCard.tsx               # Project card component
│   └── SkillSection.tsx              # Skills display
├── lib/
│   ├── db.ts                         # MongoDB connection
│   ├── github.ts                     # GitHub API client
│   ├── hooks.ts                      # Custom React hooks
│   ├── middleware.ts                 # API middleware
│   ├── models.ts                     # Mongoose schemas
│   └── utils.ts                      # Helper functions
├── pages/
│   ├── api/
│   │   ├── analytics.ts              # Analytics endpoint
│   │   ├── blog.ts                   # Blog posts API
│   │   ├── contact.ts                # Contact form API
│   │   ├── github.ts                 # GitHub repos API
│   │   ├── hello.ts                  # Health check
│   │   ├── projects.ts               # Projects API
│   │   └── track.ts                  # Visitor tracking
│   ├── _app.tsx                      # App wrapper
│   └── index.tsx                     # Home page
├── public/                           # Static files
├── styles/
│   └── globals.css                   # Global styles
├── types/
│   └── index.ts                      # TypeScript definitions
├── .dockerignore                     # Docker build exclusions
├── .env.example                      # Environment template
├── .eslintrc.json                    # ESLint config
├── .gitignore                        # Git exclusions
├── .prettierrc                       # Prettier config
├── Dockerfile                        # Production image
├── docker-compose.yml                # Dev environment
├── INTERVIEW.md                      # Interview guide
├── jest.config.js                    # Jest configuration
├── jest.setup.js                     # Jest setup
├── next.config.ts                    # Next.js config
├── package.json                      # Dependencies
├── postcss.config.js                 # PostCSS config
├── README.md                         # Main documentation
├── tailwind.config.ts                # Tailwind config
└── tsconfig.json                     # TypeScript config
```

---

## 🔄 Data Flow

### 1. Frontend Request → Backend Response

```
User Browser
    ↓
pages/index.tsx (React component)
    ↓
components/ (UI components with hooks)
    ↓
lib/hooks.ts (useAsync fetches data)
    ↓
pages/api/* (Next.js API route)
    ↓
lib/middleware.ts (validate request)
    ↓
lib/models.ts (query database)
    ↓
MongoDB (persist data)
```

### 2. Database Models

```
Project {
  title: string
  description: string
  tags: string[]
  github: url
  featured: boolean
  startDate: date
}

BlogPost {
  title: string
  slug: string
  content: string
  tags: string[]
  published: boolean
  views: number
  likes: number
}

Contact {
  name: string
  email: string
  subject: string
  message: string
  read: boolean
}

Visitor {
  ip: string
  page: string
  userAgent: string
  timestamp: date
  referer: url
}
```

---

## 🚀 Key Features & Where They Live

| Feature | Files |
|---------|-------|
| GitHub repo integration | `lib/github.ts`, `pages/api/github.ts`, `components/GithubRepoList.tsx` |
| Contact form | `components/ContactForm.tsx`, `pages/api/contact.ts`, `lib/hooks.ts` |
| Analytics tracking | `pages/api/track.ts`, `pages/api/analytics.ts`, `lib/hooks.ts` |
| Blog system | `pages/api/blog.ts`, `types/index.ts`, `lib/models.ts` |
| Project showcase | `components/ProjectCard.tsx`, `pages/api/projects.ts`, `pages/index.tsx` |
| Error handling | `lib/middleware.ts`, `lib/utils.ts` |
| Real-time ready | `pages/api/*` (Socket.io can be added) |
| Docker containerization | `Dockerfile`, `docker-compose.yml`, `.dockerignore` |
| CI/CD pipeline | `.github/workflows/ci-cd.yml` |

---

## 💾 Environment Variables

```env
# Database
MONGODB_URI=mongodb://root:rootpassword@mongodb:27017/portfolio?authSource=admin

# GitHub API (optional)
GITHUB_TOKEN=ghp_xxxxx
GITHUB_USERNAME=your_username

# Application
NODE_ENV=development
NEXT_PUBLIC_API_URL=http://localhost:3000
JWT_SECRET=your_secret_key

# Email (optional)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_password

# WebSocket
WS_URL=ws://localhost:3000
```

---

## 🔑 Key Technologies

| Category | Technology | Files |
|----------|-----------|-------|
| Framework | Next.js 14 | `next.config.ts`, `pages/*` |
| Language | TypeScript | `*.ts`, `tsconfig.json` |
| Database | MongoDB + Mongoose | `lib/models.ts`, `lib/db.ts` |
| Styling | Tailwind CSS | `tailwind.config.ts`, `styles/` |
| HTTP Client | Axios | `lib/github.ts`, `lib/hooks.ts` |
| Real-time | Socket.io (ready) | `package.json` |
| Testing | Jest | `jest.config.js` |
| Linting | ESLint | `.eslintrc.json` |
| Formatting | Prettier | `.prettierrc` |
| Containerization | Docker | `Dockerfile` |
| Orchestration | Docker Compose | `docker-compose.yml` |
| CI/CD | GitHub Actions | `.github/workflows/` |

---

## 📊 Lines of Code

```
Core Application:
  - API Routes: ~300 lines
  - Components: ~400 lines
  - Library Functions: ~250 lines
  - Types & Models: ~150 lines

Configuration:
  - TypeScript, Tailwind, Jest: ~150 lines
  - ESLint, Prettier: ~50 lines

DevOps:
  - Dockerfile: ~35 lines
  - Docker Compose: ~50 lines
  - CI/CD: ~80 lines

Documentation:
  - README: ~400 lines
  - Interview Guide: ~300 lines
  - Project Structure: ~350 lines

Total: ~2,500+ lines of code & documentation
```

---

## 🎯 What to Focus On During Interviews

### Must Know:
1. File structure and why it's organized this way
2. How data flows from UI to database
3. API design patterns (RESTful routes)
4. Error handling strategy
5. Docker setup and why multi-stage builds work

### Should Know:
1. Custom React hooks implementation
2. Mongoose schema design
3. TypeScript benefits in large codebases
4. Component composition and reusability
5. CI/CD pipeline benefits

### Nice to Know:
1. Real-time architecture with WebSockets
2. Database indexing strategies
3. Performance optimization techniques
4. Security best practices
5. Scaling strategies

---

## 🔗 Quick Links

- [README.md](README.md) - Full project documentation
- [INTERVIEW.md](INTERVIEW.md) - Interview preparation guide
- [package.json](package.json) - Dependencies & scripts
- [next.config.ts](next.config.ts) - Next.js configuration
- [Dockerfile](Dockerfile) - Production image definition
- [docker-compose.yml](docker-compose.yml) - Local dev setup

---

Made with ❤️ for FAANG interviews 🚀

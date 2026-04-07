import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  longDescription: String,
  link: { type: String, required: true },
  github: String,
  image: String,
  tags: [String],
  featured: { type: Boolean, default: false },
  live: String,
  startDate: { type: Date, required: true },
  endDate: Date,
  metrics: {
    users: Number,
    performance: String,
    downloads: Number,
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const BlogPostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  content: { type: String, required: true },
  excerpt: { type: String, required: true },
  tags: [String],
  published: { type: Boolean, default: false },
  views: { type: Number, default: 0 },
  likes: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const VisitorSchema = new mongoose.Schema({
  ip: String,
  userAgent: String,
  page: String,
  timestamp: { type: Date, default: Date.now },
  referer: String,
});

const ContactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
  read: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

export const Project = mongoose.models.Project || mongoose.model('Project', ProjectSchema);
export const BlogPost = mongoose.models.BlogPost || mongoose.model('BlogPost', BlogPostSchema);
export const Visitor = mongoose.models.Visitor || mongoose.model('Visitor', VisitorSchema);
export const Contact = mongoose.models.Contact || mongoose.model('Contact', ContactSchema);

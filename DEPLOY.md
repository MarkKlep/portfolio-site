# Deployment Guide for Intro-Web App

Your app is now ready to be published! Follow these steps to deploy it on **Render** with **MongoDB**.

## Prerequisites

1. **GitHub Account** - Create one at https://github.com if you don't have it
2. **Render Account** - Create one at https://render.com (free tier available)
3. **MongoDB Atlas Account** - Create one at https://www.mongodb.com/cloud/atlas (free tier available)

## Step 1: Set Up MongoDB

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Sign up or log in
3. Create a new cluster (free tier available)
4. Create a database user with username and password
5. Whitelist your IP or allow access from anywhere (for development)
6. Get your connection string:
   - Click "Connect" → "Connect your application"
   - Copy the MongoDB URI (looks like: `mongodb+srv://username:password@cluster.mongodb.net/dbname`)
7. Replace `dbname` with your preferred database name (e.g., `intro-web`)

## Step 2: Prepare Your Code for GitHub

1. **Install dependencies locally** (first time only):
   ```bash
   npm install
   ```

2. **Create .env file locally** (for testing):
   ```
   PORT=3000
   NODE_ENV=development
   MONGODB_URI=mongodb+srv://your-username:your-password@cluster.mongodb.net/intro-web
   ```
   > **Important**: Never commit `.env` to GitHub!

3. **Test locally**:
   ```bash
   npm start
   ```
   Visit http://localhost:3000

4. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/intro-web.git
   git push -u origin main
   ```

## Step 3: Deploy on Render

1. Go to [Render.com](https://render.com) and sign up (free tier)
2. Click **"New +"** → **"Web Service"**
3. Connect your GitHub account and select your `intro-web` repository
4. Fill in the configuration:
   - **Name**: `intro-web` (or any name)
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: Select `Free` tier

5. Click **"Advanced"** → **"Add Environment Variable"**:
   - **Key**: `MONGODB_URI`
   - **Value**: Paste your MongoDB connection string from Step 1
   - Click **Add**

6. Add another environment variable:
   - **Key**: `NODE_ENV`
   - **Value**: `production`
   - Click **Add**

7. Click **"Create Web Service"**
8. Wait for deployment to complete (usually 2-5 minutes)
9. Your app will be live at: `https://your-app-name.onrender.com`

## Step 4: Verify Deployment

- Visit your Render URL in a browser
- Test the save and search functionality
- Check Render logs for any errors (click on the service → "Logs" tab)

## Troubleshooting

**App crashes after deployment?**
- Check logs on Render dashboard
- Verify MongoDB URI is correct in environment variables
- Ensure MongoDB cluster allows connections from anywhere

**MongoDB connection timeout?**
- Go to MongoDB Atlas → Network Access
- Add IP `0.0.0.0/0` to allow all IPs

**Port issues?**
- Render assigns a port automatically via `PORT` env var
- Make sure `app.listen(process.env.PORT || 3000)` is in app.js ✓

## Making Changes

After making changes locally:
```bash
git add .
git commit -m "Description of changes"
git push
```
Render will automatically redeploy your app!

## Next Steps

- Add a frontend UI if needed
- Set up a custom domain
- Enable HTTPS (auto-enabled on Render)
- Monitor app performance on Render dashboard

Happy deploying! 🚀

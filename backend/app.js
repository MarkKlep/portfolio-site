const http = require('http');
const fs = require('fs');
const path = require('path');
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const url = 'mongodb+srv://markklepanchuk_db_user:Ytyfdb;e!1!1!1@maincluster.qtzluy1.mongodb.net/?appName=MainCluster';

const client = new MongoClient(url);

async function connectDB() {
  await client.connect();

  const db = client.db('db_logs');
  return db.collection('logs');
}

const server = http.createServer(async (req, res) => {
  const { url: reqUrl } = req;

  // Serve root page with data
  if (reqUrl === '/') {
    try {
      const collection = await connectDB();
      const data = await collection.find({}).toArray();
      
      let html = fs.readFileSync(path.join(__dirname, '../web/index.html'), 'utf-8');
      
      // Inject data into HTML
      const htmlData = data.map(item => {
        const tags = item.tags;
        const tagsBlock = tags.map(tag => `<span class="tag">${tag}</span>`).join(' ');

        return (`
          <div class="log-entry">
            <h3>${item.name}</h3>
            <p>${item.age}</p>
            <p>${item.email}</p>
            <p>${item.isActive}</p>
            <div class="tags">${tagsBlock}</div>
          </div>  
        `);
      });
      
      html = html.replace('<!--LOGS_PLACEHOLDER-->', htmlData.join(''));
      
      res.writeHead(200, { 'Content-Type': 'text/html' });
      return res.end(html);
    } catch (err) {
      console.error('Error:', err);
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      return res.end('Server Error');
    }
  }

  // Serve static files (CSS, JS, etc.)
  if (reqUrl.startsWith('/')) {
    const filePath = path.join(__dirname, '../web', reqUrl);
    
    if (fs.existsSync(filePath)) {
      const ext = path.extname(filePath);
      const contentTypes = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'application/javascript',
        '.json': 'application/json'
      };
      const contentType = contentTypes[ext] || 'text/plain';
      
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      res.writeHead(200, { 'Content-Type': contentType });
      return res.end(fileContent);
    }
  }

  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end('Not Found');
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

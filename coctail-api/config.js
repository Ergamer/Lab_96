const path = require('path');

const rootPath = __dirname;

module.exports = {
  rootPath,
  uploadPath: path.join(rootPath, '/public/uploads'),
  db: {
    url: 'mongodb://localhost:27017',
    name: 'shop'
  },
  facebook: {
    appId: "783587218695686", // Enter your app ID here
    appSecret: "757e2da06641e50ee170314ff3c16916" // Enter your app secret here
  }
};


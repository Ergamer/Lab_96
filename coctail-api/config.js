const path = require('path');

const rootPath = __dirname;

module.exports = {
  rootPath,
  uploadPath: path.join(rootPath, '/public/uploads'),
  db: {
    url: 'mongodb://localhost:27017',
    name: 'cocktail'
  },
  facebook: {
    appId: "373528869806549", // Enter your app ID here
    appSecret: "62387963e94ec7026dd627a2fe9673ee" // Enter your app secret here
  }
};


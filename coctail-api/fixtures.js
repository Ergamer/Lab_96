const mongoose = require('mongoose');
const config = require('./config');

const User = require('./models/User');

mongoose.connect(config.db.url + '/' + config.db.name);

const db = mongoose.connection;

db.once('open', async () => {
  try {
    await db.dropCollection('categories');
    await db.dropCollection('products');
    await db.dropCollection('users');
  } catch (e) {
    console.log('Collections were not present, skipping drop...');
  }

  await User.create({
    facebookId: '5b237189cc555e50b137b56e',
    username: 'saver2003@gmail.com',
    role: 'user',
    displayName: 'Alexandr  Gareev',
    token: ''
  }, {
    facebookId: '2079757342292463',
    username: 'erkek@namba.kg',
    role: 'admin',
    displayName: 'Джиджи Буффон',
    token: ''
  });

  db.close();
});
const express = require('express');
const multer = require('multer');
const nanoid = require('nanoid');
const path = require('path');

const auth = require('../middleware/auth');
const permit = require('../middleware/permit');
const Cocktail = require('../models/Cocktail');

const config = require('../config');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, config.uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, nanoid() + path.extname(file.originalname));
  }
});

const upload = multer({storage});

const router = express.Router();

const createRouter = () => {
  router.get('/', (req, res) => {
    Cocktail.find().populate('user')
      .then(cocktails => res.send(cocktails))
      .catch(() => res.sendStatus(500))
  });

  router.get('/unpublish', [auth, permit('admin')], (req, res) => {
    Cocktail.find()
      .then(cocktails => res.send(cocktails))
      .catch(() => res.sendStatus(500))
  });
    router.get('/:id', (req, res) => {
      console.log(req.params.id)
        Cocktail.findOne({_id: req.params.id})
            .then(cocktail => {
              res.send(cocktail)
            })
            .catch(() => res.sendStatus(500));
    });

  router.post('/', [auth, permit('user', 'admin'), upload.single('image')], (req, res) => {
    const cocktailData = req.body;

    if (req.file) {
      cocktailData.image = req.file.filename;
    } else {
      cocktailData.image = null;
    }
    cocktailData.ingredients = JSON.parse(cocktailData.ingredients);

    cocktailData.user = req.user;

    const cocktail = new Cocktail(req.body);


    cocktail.save()
      .then(cocktail => res.send(cocktail))
      .catch(error => res.status(400).send(error));
  });

  router.put('/publish/:id', [auth, permit('admin')], async (req, res) => {
    const cocktail = await Cocktail.findOne({_id: req.params.id});

    cocktail.published = true;
    cocktail.save()
      .then(newCocktail => res.send(newCocktail))
      .catch(error => res.status(400).send(error));
  });
  router.put('/:id', [auth, permit('admin'), upload.single('image')], async (req, res) => {
      const cocktailData = req.body;

      const cocktail = await Cocktail.findOne({_id: req.params.id});

      if (req.file) {
          cocktail.image = req.file.filename;
      } else {
          cocktail.image = null;
      }
      cocktail.title = req.body.title;
      console.log(cocktail)
      cocktail.ingredients = JSON.parse(req.body.ingredients);

      cocktail.recipe = req.body.recipe;


      cocktail.save()
          .then(cocktail => res.send(cocktail))
          .catch(error => res.status(400).send(error));
  });

  router.delete('/:id', auth, async (req, res) => {
    const cocktail = await Cocktail.findOne({_id: req.params.id});

    if(cocktail.user.toString() !== req.user._id.toString()) return res.status(403).send({error: 'Permission denied'});

    cocktail.remove()
      .then(() => res.send('Cocktail was deleted!'))
      .catch(error => res.status(400).send(error));
  });

  return router;

};

module.exports = createRouter;

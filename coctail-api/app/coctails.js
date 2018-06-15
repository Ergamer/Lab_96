const express = require('express');
const multer = require('multer');
const nanoid = require('nanoid');
const path = require('path');

const auth = require('../middleware/auth');
const permit = require('../middleware/permit');
const Coctail = require('../models/Coctail');

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
    Coctail.find({published: true})
      .then(coctails => res.send(coctails))
      .catch(() => res.sendStatus(500))
  });

  router.get('/unpublish', [auth, permit('admin')], (req, res) => {
    Coctail.find()
      .then(coctails => res.send(coctails))
      .catch(() => res.sendStatus(500))
  });

  router.post('/', [auth, permit('user', 'admin')], upload.single('image'), (req, res) => {
    const coctailData = req.body;

    if (req.file) {
      coctailData.image = req.file.filename;
    } else {
      coctailData.image = null;
    }

    const coctail = new Coctail(req.body);

    coctail.save()
      .then(coctail => res.send(coctail))
      .catch(error => res.status(400).send(error));
  });

  router.put('/publish/:id', [auth, permit('admin')], async (req, res) => {
    const coctail = await Coctail.findOne({_id: req.params.id});

    coctail.published = true;
    coctail.save()
      .then(newCoctail => res.send(newCoctail))
      .catch(error => res.status(400).send(error));
  });

  router.delete('/:id', auth, async (req, res) => {
    const coctail = await Coctail.findOne({_id: req.params.id});

    if(coctail.user.toString() !== req.user._id) return res.status(403).send({error: 'Permission denied'});

    coctail.remove()
      .then(() => res.send('Artist was deleted!'))
      .catch(error => res.status(400).send(error));
  });

  return router;

};

module.exports = createRouter;

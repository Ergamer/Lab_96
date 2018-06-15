const mongoosee = require('mongoose');
const Schema = mongoosee.Schema;

const CoctailSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  user: {

    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  image: {
    type: String,
    required: true
  },
  recipe: {
    type: String,
    required: true
  },
  published: {
    type: Boolean,
    default: false,
    required: true
  },
  ingredients: [{
    name: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    }
  }],
  rating: [{
    user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
    },
    value: {
      type: Number,
      required: true
    }
  }]
});

const Coctail = mongoosee.model('Coctail', CoctailSchema);

module.exports = Coctail;
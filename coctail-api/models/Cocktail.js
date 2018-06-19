const mongoosee = require('mongoose');
const Schema = mongoosee.Schema;

const CocktailSchema = new Schema({
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
    type: String
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
    amount: {
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

const Cocktail = mongoosee.model('Cocktail', CocktailSchema);

module.exports = Cocktail;
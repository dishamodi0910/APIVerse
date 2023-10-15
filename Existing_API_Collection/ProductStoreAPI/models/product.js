const mongoose = require('mongoose')
// use https://json-generator.com/ to generate fake data
// use below code to generate fake data for product collection
// [
//   '{{repeat(50)}}',
//   {
//     name: '{{company()}} {{random("Bed", "Sofa", "Table", "Desk", "Wardrobe", "Chair")}}',
//     price: '{{floating(300, 1000, 2, "$0,0.00")}}',
//     featured: '{{bool()}}',
//     rating: '{{floating(1, 5, 1, "0.0")}}',
//     createdAt: '{{date(new Date(2020, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',
//     company: '{{random("ikea", "liddy", "caressa", "marcos")}}',
//   }
// ]
// paste the data in products.json file if want to use different data

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'product name must be provided'],
  },
  price: {
    type: Number,
    required: [true, 'product price must be provided'],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  company: {
    type: String,
    enum: {
      values: ['ikea', 'liddy', 'caressa', 'marcos'],
      message: '{VALUE} is not supported',
    },
    // enum: ['ikea', 'liddy', 'caressa', 'marcos'],
  },
})

module.exports = mongoose.model('Product', productSchema)

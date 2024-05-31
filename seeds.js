const mongoose = require('mongoose');

const Product = require('./models/product');

mongoose
  .connect('mongodb://localhost:27017/farmStand')
  .then(() => {
    console.log('Mongo Connection Open!!!');
  })
  .catch((err) => {
    console.log('Oh no error!!');
    console.log(err);
  });

// const p = new Product({
//   name: 'Bell Pepper',
//   price: 3,
//   category: 'vegetable',
// });
// p.save()
//   .then((p) => {
//     console.log(p);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

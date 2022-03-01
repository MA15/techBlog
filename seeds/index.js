const sequelize = require('../config/connection');
const seedGallery = require('./galleryData');
const seedMovie = require('./movieData');
const seedPaintings = require('./paintingData');
const seedAll = async () => {
  await sequelize.sync({ force: true });
  await seedGallery();
  await seedPaintings();
  await seedMovie();


  process.exit(0);
};

seedAll();
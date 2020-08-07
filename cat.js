const fs = require('fs');

module.exports = (file, done) => {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      throw err;
    }
    done(data);
  });
};

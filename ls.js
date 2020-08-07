let fs = require('fs');

module.exports = (done) => {
  fs.readdir('./', 'utf8', (err, files) => {
    if (err) {
      done(err);
    } else {
      // process.stdout.write(files.join('\n'));
      done(files.join('\n'))
    }
  })
}

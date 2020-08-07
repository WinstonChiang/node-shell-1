const pwd = require('./pwd');
const cat = require('./cat');
const curl = require('./curl');
const ls = require('./ls');

const done = (output) => {
  console.log(output);
  process.stdout.write('\nprompt > ');
};

function main(data) {
  const cmd = data.toString().trim();
  //change to switch?
  if (cmd === 'pwd') {
    pwd(done);
  } else if (cmd === 'ls') {
    ls(done);
  } else if (cmd.slice(0, 3) === 'cat') {
    file = cmd.split(' ')[1];
    cat(file, done);
  } else if (cmd.slice(0, 4) === 'curl') {
    file = cmd.split(' ')[1];
    curl(file, done);
  } else {
    done('You typed: ' + cmd);
  }
}
done('welcome');
process.stdin.on('data', main);

const ls = require('./ls');
process.stdout.write('prompt > ');

const pwd = require('./pwd');

console.log(ls);

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
  if (cmd === 'pwd') {
    process.stdout.write(pwd.cwd);
    process.stdout.write('\nprompt > ');
  } else if (cmd === 'ls') {
    console.log('hello');
  } else {
    process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt > ');
  }
});

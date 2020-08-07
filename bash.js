process.stdout.write('prompt > ');

const pwd = require('./pwd')

// console.log(pwd)

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
  if (cmd === 'pwd') {
    //
    process.stdout.write(pwd.cwd)
    process.stdout.write('\nprompt > ')
  } else {
    process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt > ');
  }
});

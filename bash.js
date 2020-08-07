function prompt(data){
  console.log(data)
  process.stdout.write('prompt > ');
}

const pwd = require('./pwd');
const cat = require('./cat');

function main (data) {
  const cmd = data.toString().trim();
  //change to switch?
  if (cmd === 'pwd') {
    process.stdout.write(pwd.cwd);
    process.stdout.write('\nprompt > ');
  } else if (cmd === 'ls') {
    console.log('hi')
    require('./ls')(prompt)
  } else if (cmd.slice(0, 3) === 'cat') {
    file = cmd.split(' ')[1]
    process.stdout.write(cat(file))
  } else {
    process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt > ');
  }
};
prompt('welcome')
process.stdin.on('data', main);

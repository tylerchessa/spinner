process.stdout.write('hello from spinner1.js... \rheyyy\n');

const symbols = ([
  '|   ',
  '/   ',
  '-   ',
  '\\   ',
  '|   ',
  '/   ',
  '-   ',
  '\\   ',
  '|   '
]);

const spinner = (symbols) => {
  let time = 300;
  for (const symbol of symbols) {
    setTimeout(() => {
      process.stdout.write(`\r ${symbol}`);
    }, time);
    time += 300;
  }
};

spinner(symbols);
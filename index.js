//var http = require('http');
var data = require ('./words.json');
const readline = require('readline/promises');
const cli = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
async function main(){
  //let regex = await cli.question("known position regex:");
  const rep = await GenerateRegex();
  let result = [];
  data.words.forEach(element => {
    if(rep.test(element)){
      result.push(element);
    }
  });

  let letters = await cli.question("Pending letters(if any):");
  for (let i = 0; i < letters.length; i++) {
    const element = letters.charAt(i);
    result = result.filter(s => s.includes(element));
  }
  // let absent = await cli.question("Absent letters(if any):");
  // for (let i = 0; i < absent.length; i++) {
  //   const element = absent.charAt(i);
  //   result = result.filter(s => !s.includes(element));
  // }
  present(result);
  if (result.length > 1){
    main();
  }
  else{
    console.log('Solved!');
    cli.close();
  }
}
main();
async function GenerateRegex(){
  let reg = '';
  for (let i = 0; i < 5; i++) {
    reg += await RegexBlock(i);
    
  }
  return new RegExp(reg);
}
async function RegexBlock(index) {
    const charInfo = await cli.question(`Character ${index + 1} info? `)
    if (charInfo === '') return '.';
    const [command, letters] = charInfo.split(' ')
    if (command === 'not') { return '[^'+letters+']' }
    else if (command === 'is') { return letters.split('')[0] }
    else return '.';
}

function present(x){
  x.forEach(element => {
    console.log(element)
  });
}

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('Hello World!');
// }).listen(8080);
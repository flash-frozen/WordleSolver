//var http = require('http');
var data = require ('./words.json');
const readline = require('readline/promises');
const cli = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
async function main(){
  let regex = await cli.question("known position regex:");
  const rep = new RegExp(regex);
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
  let absent = await cli.question("Absent letters(if any):");
  for (let i = 0; i < absent.length; i++) {
    const element = absent.charAt(i);
    result = result.filter(s => !s.includes(element));
  }
  present(result);
  main();
}
main();

function present(x){
  x.forEach(element => {
    console.log(element)
  });
}

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('Hello World!');
// }).listen(8080);
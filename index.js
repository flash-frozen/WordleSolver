//var http = require('http');
var data = require ('./words.json');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
main();
function main(){
  rl.question("known position regex:", (regex)=> {
    const rep = new RegExp(regex);
    let result = [];
    data.words.forEach(element => {
      if(rep.test(element)){
        result.push(element);
      }
    });
  rl.question("Pending letters(if any):", (letters)=>{
      for (let i = 0; i < letters.length; i++) {
        const element = letters.charAt(i);
        result = result.filter(s => s.includes(element));
      }
      rl.question("Absent letters(if any):",(letters) => {
        for (let i = 0; i < letters.length; i++) {
          const element = letters.charAt(i);
          result = result.filter(s => !s.includes(element));
        }
        rl.close();
        present(result);
        main();
      });
      
    });
    
  });
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
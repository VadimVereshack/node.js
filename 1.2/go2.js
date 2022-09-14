// этот файл надо будет дописать...

// не обращайте на эту функцию внимания 
// она нужна для того чтобы правильно читать входные данные
function readHttpLikeInput(){
    var fs = require("fs");
    var res = "";
    var buffer = Buffer.alloc ? Buffer.alloc(1) : new Buffer(1);
    let was10 = 0;
    for(;;){ 
        try { fs.readSync(0 /*stdin fd*/, buffer, 0, 1); } catch (e) {break; /* windows */}
        if(buffer[0] === 10 || buffer[0] === 13) {
            if (was10 > 10) 
                break;
            was10++;
        } else 
           was10 = 0;
        res += new String(buffer);
    }

    return res;
}

let contents = readHttpLikeInput();

// вот эту функцию собственно надо написать
function parseTcpStringAsHttpRequest(string) { 
  let obj = string.split(`\n`)
  .filter(str => str.includes(`:`))
  .map(element => element.split(`:`).map(str => str.trim()))
  .reduce((obj,array) =>{obj[array[0]] = array[1]
    return obj},{});

  let array = string.split(`\n`)
  .map(str => str.trim())
  .filter(str => !str.includes(`:`) && str != ``)

  return {
    method: array[0].match(/\w*/)[0], 
    uri : array[0].match(/(\/.*)(!? )/)[0].trim(), 
    headers: obj,
    body: array[1]
    }
  ; 
}

http = parseTcpStringAsHttpRequest(contents); 
console.log(JSON.stringify(http, undefined, 2));
const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer((req , res)=> {
          //  res.end(index.html)
    const path =url.parse(req.url).pathname
    console.log(path)



switch(path) {
    case '/' : 
    handleRequest('index.html' , res)


    break;
    case '/any':
        res.end('any page');
        break;

    default :
    res.end('this page not found');
    break;
}

    });






server.listen(3000 , '127.0.0.1' ,()=>{
    console.log('server running...')
})



function handleRequest(filepath , res){
    fs.readFile(filepath, null, (error , data)=>{
        if(error){
            res.end('file have error')
        }else{
            res.end(data)
        }
    }) 
}


/***
 * 
    fs.readFile('./index.html' , null, (error , data)=>{
        if(error){
            res.end('file have error')
        }else{
            res.end(data)
        }
    }) 
 */
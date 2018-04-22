var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
    if(req.url == '/home' || req.url == '/') {
        res.writeHead(200, {"Content-type" : "text/html"});
        fs.createReadStream("./home.html").pipe(res);
        //res.end();  //NẾU end ở đây thì chả hiển thị được cái gì!
    } else {
        res.writeHead(404, {"Content-type" : "text/html"});
        res.write('<h2 style="color: red">404 Not found!</h2>');
        res.write('Cannot find this address: ' + req.url);
        res.end();
    }
});

// Bước 3: Lắng nghe cổng 3000 thì thực hiện chương trình
server.listen(3000, function() {
    console.log("Server is listening at port 3000...");
})
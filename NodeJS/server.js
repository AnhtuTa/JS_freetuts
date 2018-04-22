//TẠI SAO KHI CHẠY LỆNH npm start THÌ NÓ SẼ CHẠY FILE NÀY???

console.log('The server is runing ...');

// Bước 1: Import module http
var http = require('http');

// Bước 2: Khởi tạo server
var server = http.createServer(function(req, res) {
    // Thiết lập Header
    res.writeHead(200, {"Content-type" : "text/html"});
    
    // Show thông tin
    res.write("Your url is " + req.url);
    res.write("<h3>Hello NodeJS, by freetuts.net</h3>")

    // Show thông tin
    res.end();
});

// Bước 3: Lắng nghe cổng 3000 thì thực hiện chương trình
server.listen(3000, function() {
    console.log("Server is listening at port 3000...");
})
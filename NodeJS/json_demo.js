var student_string = '{"name": "Anhtu ta", "age": 23, "school": "HUST"}';
//phải để key trong dấu ngoặc đơn, nếu viết như sau là sai:
//"{'name': 'Anhtu ta', 'age': 23, 'school': 'HUST'}"

//convert string to JSON
var student_json = JSON.parse(student_string);

console.log(student_string);
console.log(student_json);

//convert JSON to string
var student_str = JSON.stringify(student_json);
console.log(student_str);

//save JSON string to file (ERROR)
// var persist = require('node-persist');
// persist.initSync();
// persist.setItemSync('student', student_str);

/*============== so sánh ============*/
//ko thể gọi sayHello trước khi định nghĩa nó
//sayHello("Anhtu");
var sayHello = function(name) {
    console.log("Hello " + name);
}
sayHello("Nguyen Bka");

//gọi trước khi định nghĩa vẫn được
sayGoobye("Anhtu");
function sayGoobye(name) {
    console.log("Goodbye " + name);
}
sayGoobye("Nguyen Bka");

/*
Nhận xét:
sayHello Ở trên là express function chỉ gọi được sau khi khai báo, 
sayGoobye ở dưới là normal function có thể gọi được ở bất kì đâu. 

2 cách đều như nhau tùy vào mục đích sử dụng, sử dụng express function 
nếu như muốn truyền nó như là 1 đối số vào 1 function khác.
*/
//Còn cách dùng của 2 cái này thì mỗi người 1 style. cách 1 thường dùng 
//để khởi tạo sub function. Tức là khởi tạo function nhỏ trong 1 function lớn.
// Ví dụ:

function sayHi(name) {
    var checkName = function () {
        if (name === 'Toàn') {
            // Đéo chào thằng nào tên là Toàn :v
            console.log("ĐM Toàn :v")
            return false
        } else {
            return true;
        }
    };

    if (checkName()) {
        console.log('Hi ' + name);
    }
}
sayHi("Anhtu");
sayHi("Toàn");

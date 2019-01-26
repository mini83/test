// var sum = 0;
//
// for (var i = 0; i < 10; i++) {
//     sum = sum + i + 1;
//     // console.log(i);
//     if (i === 2) {
//         break;
//     }
// }
//
// console.log(sum);

// var list = [1, 2, 3, 4, 5];
// var listSize = list.length;
//
// for (var i = 0; i < listSize; i++) {
//     console.log(list[i]);
// }

// es2015
// var list = [1, 2, 3, 4, 5];
//
// for(var item of list) { //(var i = 0; i < listSize; i++)
//     console.log(item);
//      break;
// }

// var list = [1, 2, 3, 4, 5];
//
// list.forEach(function(item) {
//     console.log(item);
// });

// var obj = {a: 1, b: 2, c: 3}; // JSON
//
// for (var i in obj) { // 쓰면 안좋다.(성능)
//     console.log(i);
// }

var list = 1;

for (var i = 0; i < 10; i++) {
    list = list * (i + 1);
}
console.log(list);

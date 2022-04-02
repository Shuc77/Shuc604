console.log(typeof Math); // => "object"
console.dir(Math);
/*
    Math = {
        PI:3.141592653589793
        abs:function(){[native code]},
        ceil:function(){[native code]}, 
    }

    Math.abs(); // 方法执行
    Math.PI; // 调用属性
*/

// console.log(Math.abs(-12.5)); // => 12.5
// console.log(Math.abs(12)); // => 12
// console.log(Math.abs(0)); // => 0

// // 传递的不是数字类型的值 先基于Number()转换为数字再处理
// console.log(Math.abs('-1')); // => 1
// console.log(Math.abs('-1px')); // => NaN
// console.log(Math.abs(true)); // => 1

// // 向上取整
// console.log(Math.ceil(12)); // => 12
// console.log(Math.ceil(12.1)); // => 13
// console.log(Math.ceil(12.9)); // => 13
// console.log(Math.ceil(-12.1)); // => -12
// console.log(Math.ceil(-12.9)); // => -12

// // 向下取整
// console.log(Math.floor(12)); // => 12
// console.log(Math.floor(12.1)); // => 12
// console.log(Math.floor(12.9)); // => 12
// console.log(Math.floor(-12.1)); // => -13
// console.log(Math.floor(-12.9)); // => -13

// // 四舍五入
// console.log(Math.round(12)); // => 12
// console.log(Math.round(12.1)); // => 12
// console.log(Math.round(12.5)); // => 13 正数里 .5 是进
// console.log(Math.round(12.9)); // => 13
// console.log(Math.round(-12.1)); // => -12
// console.log(Math.round(-12.5)); // => -13  负数里 .5 是舍 .51 则进
// console.log(Math.round(-13)); // => -13

// // 取最大最小值
// console.log(Math.max(12, 5, 68, 23, 45, 3, 27)); // => 68
// console.log(Math.min(12, 5, 68, 23, 45, 3, 27)); // => 3
// Math.max([12, 5, 68, 23, 45, 3, 27]) // => NaN 从此是只传第一个值，是个数组，和内置的语法要求不符

// 开平方和幂
// console.log(Math.sqrt(9)); // => 3 符合 N*N = M 这样的M才能整开平方
// console.log(Math.sqrt(-9)); // => NaN 负数开不了平方
// console.log(Math.pow(2, 10)); // => 1024


// 获得随机小数
// for (i = 1; i <= 10; i++) {
//     console.log(Math.random());
// }
/*
    0.6673769422503211
    0.930983439016503
    0.642621859935663
    0.11271290017764146
    0.7032923755809388
    0.7794437926964701
*/

// 获取1-10之间的随机整数
Math.round(Math.random()) * (10 - 1) + 1;
// 0-1 * 9
// 0-9 + 1
// 1-10

// 获取 25 - 30 之间的整数
for (let i = 1; i <= 10; i++) {
    let ran = Math.round(Math.random() * (30 - 25) + 25);
    console.log(ran);
}
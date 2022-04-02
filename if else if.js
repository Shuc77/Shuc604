let a = 10;
if (a <= 0) {
    console.log('hahah');
} else if(a > 0 && a < 10) {
    // A && B：A和B都成立才为true
    // A || B：A或者B只有一个成立就为true
    console.log('heheh');
} else if(a == 10) {
    console.log('xixix');
} else {
    console.log('yinyin');
}

// if(!a) {
//     // 条件可以多样性：等于、大于、小于的比较/一个值或者取反等 => 最后都是要计算出是TRUE或者FALSE
// }


//=============三元运算符：简单IF/ELSE的特殊处理方式
// 条件?条件成立处理的事情：不成立处理的事情
// a >= 10 ? console.log('heheh') : console.log('hahah');

// 1.如果处理的事情比较多，我们可以用括号包起来，每一件事情用逗号分隔
// 2.如果不需要处理事情，可以使用null/undefined占位
let b = 10;
b > 0 && b < 20 ? (b++,console.log(b)) : null;

if (b > 0 && b < 20) {
    b++; // b += 1 ,b = b + 1 => 自身累加一
    console.log(b);
}


let c = 10;
c >= 10 ? console.log('heheh') : console.log('hahah');

if (c >= 10) {
     console.log('heheh');
} else {
     console.log('hahah');
    }


let d = 10;
d > 0 ? (d < 10 ? d++ : d--) : (d > -10 ? d += 2 : null);

if (a > 0) {
    if (a < 10) {
        a++;
    } else {
        a--;
    }
} else {
    if (a > -10) {
        a += 2;
    }
}


//===================== Switch case: 一个变量再不同情况下的不同操作
// 1.每一种CASE情况结束后最好都加上BREAK
// 2.default等价于else，以上都不成则立干的事情
// 3.每一种case情况的比较用的都是 === 绝对相等
let e = '5';
switch(a) {
    case 1:
        console.log('heheh');
        break;

    case 5: // => 此处 '5' case 5 => FALSE
        console.log('hahah');
        break;

    default:
        console.log('xixix')
}

e = '5';
if (a == 1) {
    console.log('hehe')
} else if (a == 5){
    
}
// 不加break，当前条件成立执行完成后，后面条件不论是否成立都要执行，直到遇到break为止(不加break可以实现变量再某些值的情况下做相同的事情 => 编程开发人员要具备探索尝试之心)
let f = 1;
switch (f) {
    case 1: 
    case 5:
        a += 2;
        break;
    default:
        a--;
}
console.log(f);

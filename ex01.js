console.log("Hello world");

function first() {
    second();
    console.log("first");
}

function second() {
    third();
    console.log("second");
}

function third() {
    console.log("third");
}

function run () {
    console.log("3초");
}

setTimeout(run, 3000);
first();


let a = 1;
a = 0;

const b = 1;

let num1 = 1;
let num2 = 2;
let result = 3;
// 1 더하기 2는 3

let str = `${num1} 더하기 ${num2}는 ${result}`;
console.log(str);


const sayNode = () => {   // 변수처럼 사용 가능
    console.log('Node');
}

let es = 'ES';

const newObj = {    // list
    Func : sayNode,
    // =
    sayJS : function() {
        console.log('JS');
    },
    [es+6] : 'Fantastic'
}

newObj[es+6] = 'Fantastic'; // = ES6 : 'Fantastic'
newObj.Func();
console.log(newObj.ES6);
newObj.sayJS();


var relationship1 = {
    name: 'zero',
    friends: ['nero', 'hero', 'xero'],
    add: ['한누리관', '송백관'],
    logFriends: function() {
        // var that = this;    //relationship1을 가리키는 this를 that에 저장
        this.add.forEach(addlist => {
            this.friends.forEach(friend => {
                console.log(this.name, friend, addlist);
            });
        }) 
    },
};
relationship1.logFriends();
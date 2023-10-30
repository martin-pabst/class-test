// https://stackoverflow.com/questions/42599560/javascript-class-extend-on-condition
console.log("Hier!");
class Test {
    a;
    constructor() {
        this.a = 7;
    }
    oldMethod() {
        console.log("Old Method");
    }
}
let p = `
return class extends klass {
    b = 8;
    constructor(){
        super();
    }
}
`;
const f = new Function('klass', p);
let newKlass = f(Test);
let newObject = new newKlass();
console.log(newObject);
let Test1 = Test;
let k1 = class extends Test1 {
    c = 12;
    constructor() {
        super();
    }
};
k1.prototype["newMethod"] = function () {
    console.log(this.c);
};
let newObject1 = new k1();
console.log(newObject1);
newObject1["newMethod"]();
class TestA {
    static dt() {
        console.log("dt of A!");
    }
}
class TestB extends TestA {
    static dt() {
        console.log("dt of B!");
    }
}
let v = TestA;
v["dt"]();

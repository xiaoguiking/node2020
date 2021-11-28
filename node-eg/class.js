class Person {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }
    toValue () {
    console.log(this)
        console.log(this.x + this.y)
    }
}

const p1 = new Person(1,2);
const p2 = new Person(3,4)

// console.log(p1._proto_ === p2._proto_)
// console.log(p1.toValue(), "=========>p1")
// p1.toValue()


class MyClass {
    get prop () {
        return "初始值"
    }

    set prop (value) {
        console.log(value + "打印值")
    }
}

let asint = new MyClass();

// asint.prop = "更新"
asint.prop
// console.log(asint.prop)


const List = class ClassList {
    constructor () {

    }

    toValue () {
        console.log("toValue =======>")
    }
}

let list1 = new List();

console.log(list1.toValue())


let point = new class {
    constructor(name) {
        this.name = name;
    }
    sayName () {
        console.log(this.name)
    }
}('账上')

point.sayName()
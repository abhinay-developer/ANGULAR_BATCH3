class Parent{
    id:number;
    firstName:string;
}

class Child extends Parent{
}

let child=new Child();
child.id=1;
child.firstName="Sai";
console.log(child);
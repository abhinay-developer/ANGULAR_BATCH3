interface Person{
    name:string;
    age:number;
    add(first:number,secound:number);
}

class Employee implements Person{
    name: string;
    age: number;
    sum:number;
    add(first: number, secound: number) {
        this.sum=first+secound;
        console.log(this.sum);
    }
    
}
class Student implements Person{
    name: string;
    age: number;
    sum:number;
    add(first: number, secound: number) {
        this.sum=first+secound;
        console.log(this.sum);
    }
    
}
let emp=new Employee();
emp.add(10,20);
let stu=new Student();
stu.add(10,20);
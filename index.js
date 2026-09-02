// var a=20;
// var b=20;
// var c=20;
// console.log(a+b+c);
// let arr=[1,2,3,4,5];
// console.log(arr);
// arr.splice(2,2,1,2);
// console.log(arr);

// var x=20;
// if(x==20){
//     console.log("X IS 20");
// }else{
//     console.log("X is not 20");
// }

// console.log(`may age is ${2+16}`);
// let a=prompt("Enetr your names");
//console.log(a);

// for(let a=0;a<5;a++){
//     console.log(a);
// }

// let arr=[1,2,3,4,5];
// for(let a=0;a<arr.length;a++){
//     console.log(arr[a]);
// }

// const app = require('./app.js');
// console.log(app);

// let firstname="Dhruv";
// let lastname="Sharma";
// console.log(firstname," ",lastname);

// var a=2;
// var b=3;
// if(a>b){
//     console.log("A is greater than B");
// }else{
//     console.log("B is greater than A");
// }

// function abes(){
//     console.log("Welcoe Students");
//     console.log("Welcome to Node.js");

// }
// abes();


// function greet(fname,lname){
//     console.log("Hello",fname,lname);
// }
// greet("Dhruv","Sharma");
// greet("Akshit","Satti");

// function sum( a, b){
// console.log("sum:",a+b)
// }
// var result=sum(2,3);
// console.log(result);


// function fname(finame="ABES",laname="Engineering college"){
//     console.log(finame,"",laname);
// }

// fname();
// fname("IIT","Delhi");

// function marks(maths,englih,hindi){
//     return maths+englih+hindi;
// }

// function percentage(total){
//     return total/3;
// }

// let total=marks(90,90,90);
// console.log("Total marks",total);
// console.log("Percentage",percentage(total));

// let a=2;
// if(a%2==0){
//     console.log("No is even");
// }else{
//     console.log("No is odd");
// }

// const student={
//     name:"Dhruv",
//     rollno:25,
//     branch:"A.I.M.L",
//     marks:25,
// }
// console.log(student);

// function percentage(eng,maths,hindi){
//     console.log((eng+maths+hindi)/3);
// }
// // percentage(22,55,33);
// percentage(90,90,90);


// let arr=[1,2,3,4,5];
// let  sum=0;
// for(let i=0;i<5;i++){
//     sum=sum+arr[i];
//     console.log(arr[i]);
// }
// console.log("Sum of array=",sum);


// let srr=[["Dhruv","Keshav","Bhaskar"],["Akshat","Akshit","Female"]];
// console.log(srr);

// const student={
//     name:"Dhruv",
//     rollno:25,
//     branch:"A.I.M.L",
//     marks:25,
// }
// console.log(student);

// let user=[{
//     name:"Dhruv",
//     branch:"A.I.M.L",
// },
// {
//     name:"Keshav",
//     branch:"A.I.M.L",
// }]
// console.log(user);

// const data={
//     name:"Dhruv Sharma",
//     Branch:"Aiml",
//     rollno:25,
// }
// console.log(data);
// data.rollno+=25;
// delete data.name;
// console.log(data);


//                 String
// let name="Dhruv";
// console.log(name);
// console.log("Sting length:",name.length);
// console.log("Upper case:",name.toUpperCase());
// console.log("Lower case",name.toLowerCase());
// console.log(name.charAt(4));
// let message="JavaScript is this ";
// console.log(message.lastIndexOf("this"));
// console.log(message.slice(1,5));
// // console.log(message.splice(1,2,"tp"));
// let data="html,css,js";
// console.log(data.split(","));
// console.log(data);
// let text="Dhruv Sharma";
// console.log(text.replace("Dhruv","Keshav"))
// let first="Akshat";
// let last="Sinah";
// console.log(first.concat(" ",last));
// console.log(first.includes("ksh"));
// let arr=[1,2,3,4];
// console.log(arr);
// arr.push(5);
// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.shift();
// console.log(arr);
// arr.unshift(5);
// console.log(arr);
// let date=new Date();
// console.log(date);
// console.log(date.getFullYear());
// console.log(date.getMonth()+1);
       


//                                    *====Maths====*
// console.log("Maximum:", Math.max(10, 20, 30, 40));
// console.log("Minimum:",Math.min(10,20,23));
// console.log(Math.pow(2,4));
// console.log(Math.floor(4.2));


// const obj={
//     name:"Dhruv Sharma",
//     age:18
// }

// console.log(obj.name)

//                                                Object

// const obj={
//     name:"Dhruv Sharma",
//     age:18,
//     objf(){
// console.log(this.name);
// console.log(this.age);
//     }
// }

// console.log(obj.objf());



// const onj={
//  salary:25000,
// creadit_score:400,
// update(){
//     this.salary=this.salary+5000;
//     console.log(this.salary);
//     this.creadit_score=this.creadit_score+200;
//     console.log(this.creadit_score);
// }
// }
// console.log(onj.update());




// function show(){
//     console.log(this.adress);
//     console.log(this.city);
// }

// const obj={
//     adress:"Nand Nagri Modinagar",
//     city:"Modinagar",
//  show:show
// }


// const obj1={
//     adress:"Nand Nagri",
//     city:"Govindpuri",
//  show:show
// }
// obj.show();




function clg(){
    console.log(this.name);
    console.log(this.id);
}

const Department={
  name:"Dhruv Sharma",
    id:52,
    clg:clg
}
const clas={
    name:"Keshav Sharma",
    id:522,
        clg:clg

}

clas.clg();
Department.clg();
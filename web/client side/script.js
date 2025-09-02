//Array
// let arr1=new Array("your name",20,true) (index array)
// let arr2=["your name",20,true]
// console.log(arr1,arr2);
// document.write("<hr>");
// arr1.forEach((item) => {
//     document.writeln(`${item}<br>`);

// });

//array manipulation
// let arr1=new Array("your name",20,true)
// let arr2=["your name",20,true]
// arr2.push("email@doamin.com");
// arr2.push("ktm, nepal");
// arr2.unshift("ID100");
// arr2.unshift("1");

// arr1.pop();//
// arr1.shift();//complete it

// //adding on middle
// arr2.splice(2,0,"Developer");

// //removing mis values
// arr2.splice(4,1); //1 is items to remove after 4th line

// console.log(arr1,arr2);
// document.write("<hr>");

// arr2.forEach((item) => {
//     document.writeln(`${item}<br>`);

// });
// document.write("<hr>");
// arr1.forEach((item) => {
//     document.writeln(`${item}<br>`);
// });

// //object declaration
let objData={
    "name":"prerana",
    "age":20,
    "email":"email@gmail.com"
}
// //console.log(objData);
console.log(
    Object.entries(objData).forEach(item=>{
        document.write(`${item[0]}:${item[1]}<br>`);
    })
);
document.write("<hr>");

console.log(
)



   
    Object.keys(objData), 
    Object.values(objData)


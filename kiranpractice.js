// // //7 jan practice 

// // // let arr=[10,20,30,40,50,65];

// // // let newarr=arr.map((num)=>{
// // //     return num*2;

// // // })


// // // console.log(newarr);

// // // const fil_array =arr.filter((num)=>{
// // //     return num%2==0;
// // // });

// // // console.log(fil_array);


// // let arr=[10,20,30,40,50,65];
// // for(var i=0;i<6;i++){
// //     console.log(arr[i]);
// // }


// const students = [
//   {
//     id: 1,
//     name: "Kunal",
//     marks: 90
//   },
//   {
//     id: 2,
//     name: "Rahul",
//     marks: 75
//   },
//   {
//     id: 3,
//     name: "Priya",
//     marks: 85
//   }
// ];

// // let name_array=students.map((names)=>{
// //     return students.name;


// // });

// // console.log(name_array);

// let marks_arr=students.map((student)=>{
//     return student.marks;
// })
// console.log(marks_arr);

// let q3=students.map((student)=>
// {
//     return student.marks,name;

// })

// console.log(q3);

const students = [
  { id: 1, name: "Kunal", marks: 90, city: "Pune" },
  { id: 2, name: "Rahul", marks: 75, city: "Mumbai" },
  { id: 3, name: "Priya", marks: 85, city: "Pune" },
  { id: 4, name: "Amit", marks: 60, city: "Delhi" }
];

//FILTER


// 

let q2=students.filter((student)=>{

    return student.marks>80 && student.city=="Pune";

})

console.log(q2)




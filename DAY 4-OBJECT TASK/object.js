
//1.create student object
let student={
    name:"Gokul",
    age:20,
    department:"CSE",
    marks:[85,90,78,92,88]
};

//2.Print all values
console.log("Name:",student.name);
console.log("Age:",student.age);
console.log("Department:",student.department);
console.log("Marks:",student.marks);


//3.Change the name

 student.name="Arun";
 console.log("Updated Name:",student.name);

//4.Add new property
let total=student.marks[0]+student.marks[1]+student.marks[2]+student.marks[3]+student.marks[4];
student.percentage=(total/5).toFixed(2);
console.log("Percentage:",student.percentage + "%");


//5.Print highest marks
let highestMarks=Math.max(...student.marks);
console.log("Highest Marks:",highestMarks);



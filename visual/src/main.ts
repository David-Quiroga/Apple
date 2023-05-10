// import { Student} from "./entities/student"
// import { Teacher } from "./entities/teacher"


// let student:Student[] = []
// let teacher: Teacher[] = []


// function addStudent () {
//     let currentStudent:Student = {
//         name: readHTML("nameStudent"),
//         identification: parseInt(readHTML("identificationStudent")),
//         address: readHTML("addressStudent"),   
//         registrationCode: parseInt(readHTML("registrationCodeStudent")),
//         level: readHTML("levelStudent")
//     }
//     student.push(currentStudent)
//     console.table(student)
// }

// function readHTML (id:string):string{
//     return(<HTMLInputElement> document.getElementById(id)).value
// }

// function addTeacher () {
//     let currentTeacher:Teacher = {
//         name: readHTML("nameTeacher"),
//         identification: parseInt(readHTML("identificationTeacher")),
//         address: readHTML("addressTeacher"),
//         carrer: readHTML("carrerTeacher"),
//         title: readHTML("titleTeacher"),
//         signature: readHTML("signatureTeacher")

//     }
//     teacher.push(currentTeacher)
//     console.log(teacher)
//     console.table(teacher)
// }

import{Student} from "./entities/student"
import{Teacher} from "./entities/teacher"
import {Course} from "./entities/course";
let students: Student[] = [];
let teachers: Teacher[] = [];
let courses: Course[] = [];
enum Carrera {
    turismo = "Turismo",
    marketing = "Marketing",
    software = "Software",
}
function addStudent(){
let currentStudent: Student = {
    name: readHtml("nameStudent"),
    identification: parseInt( readHtml("identificationStudent")),
    address: readHtml("addressStudent"),
    registrationCode: parseInt ( readHtml("registrationCodeStudent")),
    level: readHtml("levelStudent"),
}
    students.push(currentStudent);
    console.log(students);
    console.table(students);
}
function addTeacher(){
let currentTeacher: Teacher = {
    name: readHtml("nameTeacher"),
    identification: parseInt( readHtml("identificationTeacher")),
    address: readHtml("addressTeacher"),
    title:readHtml("titleTeacher"),
    signature: readHtml("signatureTeacher") as "Interfaces" | "Programacion" | "Metodologias",
    carrer: readHtml("carrerTeacher"),
}
    teachers.push(currentTeacher);
    console.log(teachers);
    console.table(teachers);
}
function addCourse(){
let currentCourse: Course = {
    area: readHtml("areaCourse"),
    name:  readHtml("nameCourse"),
}
    courses.push(currentCourse);
    console.log(courses);
    console.table(courses);
}
function readHtml(id: string): string{
    return (<HTMLInputElement> document.getElementById(id)).value;
}


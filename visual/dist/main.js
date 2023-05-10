"use strict";
// import { Student} from "./entities/student"
// import { Teacher } from "./entities/teacher"
Object.defineProperty(exports, "__esModule", { value: true });
let students = [];
let teachers = [];
let courses = [];
var Carrera;
(function (Carrera) {
    Carrera["turismo"] = "Turismo";
    Carrera["marketing"] = "Marketing";
    Carrera["software"] = "Software";
})(Carrera || (Carrera = {}));
function addStudent() {
    let currentStudent = {
        name: readHtml("nameStudent"),
        identification: parseInt(readHtml("identificationStudent")),
        address: readHtml("addressStudent"),
        registrationCode: parseInt(readHtml("registrationCodeStudent")),
        level: readHtml("levelStudent"),
    };
    students.push(currentStudent);
    console.log(students);
    console.table(students);
}
function addTeacher() {
    let currentTeacher = {
        name: readHtml("nameTeacher"),
        identification: parseInt(readHtml("identificationTeacher")),
        address: readHtml("addressTeacher"),
        title: readHtml("titleTeacher"),
        signature: readHtml("signatureTeacher"),
        carrer: readHtml("carrerTeacher"),
    };
    teachers.push(currentTeacher);
    console.log(teachers);
    console.table(teachers);
}
function addCourse() {
    let currentCourse = {
        area: readHtml("areaCourse"),
        name: readHtml("nameCourse"),
    };
    courses.push(currentCourse);
    console.log(courses);
    console.table(courses);
}
function readHtml(id) {
    return document.getElementById(id).value;
}

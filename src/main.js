
import students from "./students.json"

const inputsInfo = {
    name: document.querySelector("#name"),
    surname: document.querySelector("#surname"),
    age: document.querySelector("#age"),
    studyCurse: document.querySelector("#studyCurse")
}
const { name, surname, age, studyCurse} = inputsInfo

const btnsCourses = {
    math: document.querySelector("#btnMathAdd"),
    english: document.querySelector("#btnEnglishAdd"),
    history: document.querySelector("#btnHistoryAdd"),
    science: document.querySelector("#btnScienceAdd"),
}
const btnAdd = document.querySelector("#btn")
const table = document.querySelector("#table")
const btnDelete = document.querySelector("#btnDelete")
const inputNumb = document.querySelector("#deleteNumb")
const changeNumb = document.querySelector("#changeNumb")
const btnChange = document.querySelector("#btnChange")



btnAdd.addEventListener("click", addStudnet)
btnDelete.addEventListener("click", deleteStudent)
btnChange.addEventListener("click", changeStudent)

let courses = []

function addStudnet() {
    const sObject = {name: name.value, surname: surname.value, age: age.value, studyCurse: studyCurse.value, courses: courses, number: students.length+1}
    students.push(JSON.stringify(sObject))
    courses = []
    
    let newStr = `<tr>
    <th>${sObject.name}</th>
    <th>${sObject.surname}</th> 
    <th>${sObject.age}</th>
    <th>${sObject.studyCurse}</th>
    <th>${sObject.courses}</th>
    <th>${students.length}</th>
    </tr>`
    table.insertAdjacentHTML("beforeend", newStr)
    
}

function deleteStudent() {
    const newStudents = students.splice(students.indexOf(students.find(i => JSON.parse(i).number === Number.parseInt(inputNumb.value))), 1)

    table.innerHTML = " "
    table.innerHTML = `<tr>
    <th>Ім'я</th>
    <th>Прізвище</th>
    <th>Вік</th>
    <th>Kypc</th>
    <th>Курси</th>
    <th>Номер</th></tr` 

    let lengthCount = 0

    for (const i of students) {
        lengthCount+=1
        let newStr = `<tr>
        <th>${JSON.parse(i).name}</th>
        <th>${JSON.parse(i).surname}</th> 
        <th>${JSON.parse(i).age}</th>
        <th>${JSON.parse(i).studyCurse}</th>
        <th>${JSON.parse(i).courses}</th>
        <th>${lengthCount}</th>
        </tr>`
        table.insertAdjacentHTML("beforeend", newStr)

    }
}

// =============================================

const inputsInfC = {
    nameC: document.querySelector("#nameC"),
    surnameC: document.querySelector("#surnameC"),
    ageC: document.querySelector("#ageC"),
    studyCurseC: document.querySelector("#studyCurseC")
}
const { nameC, surnameC, ageC, studyCurseC} = inputsInfC

const btnsCoursesC = {
    mathC: document.querySelector("#btnMathAddC"),
    englishC: document.querySelector("#btnEnglishAddC"),
    historyC: document.querySelector("#btnHistoryAddC"),
    scienceC: document.querySelector("#btnScienceAddC"),
}

function changeStudent() {


    const newStudent = students.find(i => JSON.parse(i).number === Number.parseInt(changeNumb.value))
    students.splice(students.indexOf(students.find(i => JSON.parse(i).number === Number.parseInt(inputNumb.value))), 1)
    table.innerHTML = " "
    table.innerHTML = `<tr>
    <th>Ім'я</th>
    <th>Прізвище</th>
    <th>Вік</th>
    <th>Курс</th>
    <th>Курси</th>
    <th>Номер</th></tr>`
    
    let lengthCount = 0
    
    const parsedNewStudent = JSON.parse(newStudent)
    parsedNewStudent.name = nameC.value
    parsedNewStudent.surname = surnameC.value
    parsedNewStudent.age = ageC.value
    parsedNewStudent.studyCurse = studyCurseC.value
    parsedNewStudent.courses = courses
    console.log(parsedNewStudent);
    const stringify = JSON.stringify(parsedNewStudent)
    students.push(stringify)
    for (const i of students) {
        lengthCount+=1
        let newStr = `<tr>
        <th>${JSON.parse(i).name}</th>
        <th>${JSON.parse(i).surname}</th> 
        <th>${JSON.parse(i).age}</th>
        <th>${JSON.parse(i).studyCurse}</th>
        <th>${JSON.parse(i).courses}</th>
        <th>${lengthCount}</th>
        </tr>`
        table.insertAdjacentHTML("beforeend", newStr)
        
    }
    courses = []
}


// =======================btn=========================

btnsCourses.math.addEventListener("click", ()=> {
    if (courses.includes("Math")) {
        alert("Ти вже записаний/а на цей курс!")
    }
    else {
        courses.push("Math")
    }
})

btnsCourses.english.addEventListener("click", ()=> {
    if (courses.includes("English")) {
        alert("Ти вже записаний/а на цей курс!")
    }
    else {
        courses.push("English")
    }
})

btnsCourses.history.addEventListener("click", ()=> {
    if (courses.includes("History")) {
        alert("Ти вже записаний/а на цей курс!")
    }
    else {
        courses.push("History")
    }
})

btnsCourses.science.addEventListener("click", ()=> {
    if (courses.includes("Science")) {
        alert("Ти вже записаний/а на цей курс!")
    }
    else {
        courses.push("Science")
    }
})


// +++++++++++++++++++++++++++

btnsCoursesC.mathC.addEventListener("click", ()=> {
    if (courses.includes("Math")) {
        alert("Ти вже записаний/а на цей курс!")
    }
    else {
        courses.push("Math")
        console.log(courses);
    }
})

btnsCoursesC.englishC.addEventListener("click", ()=> {
    if (courses.includes("English")) {
        alert("Ти вже записаний/а на цей курс!")
    }
    else {
        courses.push("English")
    }
})

btnsCoursesC.historyC.addEventListener("click", ()=> {
    if (courses.includes("History")) {
        alert("Ти вже записаний/а на цей курс!")
    }
    else {
        courses.push("History")
    }
})

btnsCoursesC.scienceC.addEventListener("click", ()=> {
    if (courses.includes("Science")) {
        alert("Ти вже записаний/а на цей курс!")
    }
    else {
        courses.push("Science")
    }

})




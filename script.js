setTimeout( () =>{

    // Retrieve the element by its ID (no '#' needed)
    let tom = document.getElementById("dataOfmeeting");
    tom.innerHTML = prompt("next Meeting data:", "Dushanba ")
    // Log the inner HTML of the element
    
    let upcomingLesson1 = document.getElementById("upcomingLesson1");
    upcomingLesson1.innerHTML = prompt("Upcoming Lessons1")
    let upcomingLesson2 = document.getElementById("upcomingLesson2");
    upcomingLesson2.innerHTML = prompt("Upcoming Lessons2")
    
    let student1 = document.getElementById("student1");
    student1.innerHTML = prompt("Previous Lesson to be taught by", "scope va arraylar => NEO")
    let student2 = document.getElementById("student2");
    student2.innerHTML = prompt("Previous Lesson to be taught by", "scope va arraylar => NEO")
    let student3 = document.getElementById("student3");
    student3.innerHTML = prompt("Previous Lesson to be taught by", "scope va arraylar => NEO")
    console.log('tom: ',tom);

},5000)





// console.log("Hello i am working");
// const moment = require('moment');
// let time = moment().format(`YYYY MM DD HH:MM`); 
// console.log(`Posted on: ${time}`);
// let dateOfMeeting; 
// prompt('When is upcoming group meeting? ') = dateOfMeeting;
// // document.getElementById('#dataOfmeeting').innerHTML = dateOfMeeting;

const teachers = [    //this variable could not be reassign
    {
        name:'Asget',
        topicArea: 'Javascript'
    }
];

const courses = ['Introducing JavaScript',
                'JavaScript Basics',
                'JavaScript Lopps, Arrays and Object',
                'Getting Started with ES2016',
                'JavaScripting By Example',
                'DOM Scripting By Example'];

var i = courses.length;

function addNewTeacher(newTeachers){
    teachers.push(...newTeachers)
}

function printTreehouseSummary(){

    for(let i =0; i < teachers.length; i++){
        console.log(`${teachers[i].name} teaches ${teachers[i].topicArea}`);
    }

    console.log(`Treehouse has ${i} JavaScript courses, and ${teachers.length} JavaScript teachers`);
}

let newTeachers = [
    {
        name: 'James',
        topicArea: 'JavaScript'
    },
    {
        name: 'Treasure',
        topicArea: 'JavaScript'
    }
];
document.write(addNewTeacher(newTeachers));
document.write(printTreehouseSummary());


        
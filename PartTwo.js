
// Part 2-0

function createTable(){

    // input
    let data = 
        `name, age, role
        Kaleb Burd, 24, Instructor
        Tariq Hook, 39, Co-Founder
        Harry Potter, 18, Student
        Gollum, 589, Student
        Bill Gates, 65, Student`;
       
    // split each line into a single record with header
    let rows = data.split("\n");

    // seperate each row record into it's field record by delimeter
    for(let i = 0; i < rows.length; i++){
        rows[i] = rows[i].split(", ")
    }

    console.log(rows);

}


// Part 2-1
function SumAge(){
    
    let data = 
        `name, age, role
        Kaleb Burd, 24, Instructor
        Tariq Hook, 39, Co-Founder
        Harry Potter, 18, Student
        Gollum, 589, Student
        Bill Gates, 65, Student`;
       
    let rows = data.split("\n");

    for(let i = 0; i < rows.length; i++){
        rows[i] = rows[i].split(", ")
    }

    // declare and initialize int variable to sum age
    let total = 0;

    // get age value of each row and cast to Number then add to total variable
    for(let i = 0; i < rows.length; i++){
        let age = Number(rows[i][1]);
        total += age;
    }

    console.log(total);
}

// Part 2-2
function getAverage(){

    let data = 
        `name, age, role
        Kaleb Burd, 24, Instructor
        Tariq Hook, 39, Co-Founder
        Harry Potter, 18, Student
        Gollum, 589, Student
        Bill Gates, 65, Student`;
        
    let rows = data.split("\n");

    for(let i = 0; i < rows.length; i++){
        rows[i] = rows[i].split(", ")
    }

    let total = 0;

    for(let i = 0; i < rows.length; i++){
        let age = Number(rows[i][1]);
        total += age;
    }

    // get average of the age variable
    let average = total/rows.length

    console.log(average);

}

// Part 2-3
function getLargestAge(){

    let data = 
        `name, age, role
        Kaleb Burd, 24, Instructor
        Tariq Hook, 39, Co-Founder
        Harry Potter, 18, Student
        Gollum, 589, Student
        Bill Gates, 65, Student`;
    
    let rows = data.split("\n");

    for(let i = 0; i < rows.length; i++){
        rows[i] = rows[i].split(", ")
    }

    let largest = -1;

    // get largest age
    for(let i = 0; i < rows.length; i++){
        let age = Number(rows[i][1]);
        if(largest < age){
            largest = age;
        }
    }

    console.log(largest);

}

//Part 2-4
function getOldestPerson(){

    let data = 
        `name, age, role
        Kaleb Burd, 24, Instructor
        Tariq Hook, 39, Co-Founder
        Harry Potter, 18, Student
        Gollum, 589, Student
        Bill Gates, 65, Student`;
    
    let rows = data.split("\n");

    for(let i = 0; i < rows.length; i++){
        rows[i] = rows[i].split(", ")
    }

    let largest = -1;
    let person;

    // get oldest person
    for(let i = 0; i < rows.length; i++){
        let age = Number(rows[i][1]);
        if(largest < age){
            largest = age;
            person = rows[i][0]
        }
    }

    console.log(person);

}
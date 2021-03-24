
// Part 2-0

function zero(){

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

    console.log(rows);

}


// Part 2-1
function one(){
    
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

    console.log(total);
}

// Part 2-2
function two(){

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

    let average = total/rows.length

    console.log(average);

}

// Part 2-3
function three(){

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

    for(let i = 0; i < rows.length; i++){
        let age = Number(rows[i][1]);
        if(largest < age){
            largest = age;
        }
    }

    console.log(largest);

}

//Part 2-4
function four(){

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

    for(let i = 0; i < rows.length; i++){
        let age = Number(rows[i][1]);
        if(largest < age){
            largest = age;
            person = rows[i][0]
        }
    }

    console.log(person);

}
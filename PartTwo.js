
// Part 2-0

function zero(){
    // Creating the data
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
function sumAges(){
    // crating the data
    let data =
        `name, age, role
        Kaleb Burd, 24, Instructor
        Tariq Hook, 39, Co-Founder
        Harry Potter, 18, Student
        Gollum, 589, Student
        Bill Gates, 65, Student`;
        // breaking up data into rows
    let rows = data.split("\n");
    // converting each row in list of columns
    for(let i = 0; i < rows.length; i++){
        rows[i] = rows[i].split(", ")
    }
    // total i      age
    // 0     1      24
    // 24    1      24
    // 24    2      24
    // 24    2      39
    // 63    2      39
    let total = 0; // age starts with 0
     // loops over each record
     for(let i = 1; i < rows.length; i++){
        // looking at age column in specific row and converting it to a number
     let age = Number(rows[i][1]);
     // adds age to the total
     total += age;
    }
    // logs total of ages
    console.log(total);
    // Answer: 735
}
// Part 2-2
function averageAge(){
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
     // total   i      age
    // 0        1      24
    // 24       1      24
    // 24       2      24
    // 24       2      39
    // 63       2      39
    // 63       3      18
    // 63       3      18
    // 81       3      18
    // 81       4      18
    // 81       4      589
    // 700      4      589
    // 700      5      589
    // 700      5      65
    // 765      5      65
    // average
    // total(765)/row.length(5) = 153
    // console.log(average); Answer = 153
    let total = 0;
    // loops over each record
    for(let i = 1; i < rows.length; i++){
    // looking at age column in specific row and converting it to a number
     let age = Number(rows[i][1]);
     // adds age to the total
     total += age;
    }
    let average = total/rows.length // divides total of ages by number of rows
    console.log(average); // logs average age
}
// Part 2-3
function findLargestAge() {
    // Creating data
    let data =
        `name, age, role
        Kaleb Burd, 24, Instructor
        Tariq Hook, 39, Co-Founder
        Harry Potter, 18, Student
        Gollum, 589, Student
        Bill Gates, 65, Student`;
    let rows = data.split("\n");
    // Loop over each row of data
    for(let i = 0; i < rows.length; i++){
        // Convert each row into a list of colunms
        rows[i] = rows[i].split(", ")
    }

    // largest   i   age
    // -1        1   24
    // 24        1   24
    // 24        2   24
    // 24        2   39
    // 39        2   39
    // 39        3   39
    // 39        3   18
    // 39        3   39
    // 39        4   39
    // 39        4   589
    // 589       4   589
    // 589       5   589
    // 589       5   65
    // 589       5   589

    // console.log(larget) Answer: 589


    let largest = -1;
    for(let i = 0; i < rows.length; i++){ // looping through the row array
        let age = Number(rows[i][1]); // pulls age of each row
        if(largest < age){ // if age is greater than the largest it will be replaced
            largest = age; // replaces previous age if larger
        }
    }
    console.log(largest); // logs largest age
}
//Part 2-4
function four(){
    // Creating data
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

    // largest   i   age   person  
    // -1        1   24     
    // 24        1   24    Kaleb Burd
    // 24        2   24    Kaleb Burd
    // 24        2   39    Kaleb Burd
    // 39        2   39    Tariq Hook
    // 39        3   39    Tariq Hook
    // 39        3   18    Tariq Hook
    // 39        3   39    Harry Potter
    // 39        4   39    Harry Potter
    // 39        4   589   Harry Potter
    // 589       4   589   Gollum
    // 589       5   589   Gollum
    // 589       5   65    Gollum
    // 589       5   589   Bill Gates

    // console.log(person) Answer: Gollum

    let largest = -1; // new varible for holding largest
    let person; // varible for persons name
    for(let i = 0; i < rows.length; i++){ // looping through the row array
        let age = Number(rows[i][1]); // pulls age of each row
        if(largest < age){// if largest is less than age
            largest = age; // replaces previous age if larger
            person = rows[i][0] // pulls person with the largest age
        }
    }
    console.log(person);// logs name of person with largest age
}
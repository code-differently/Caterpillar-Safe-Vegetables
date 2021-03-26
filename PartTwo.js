
// Part 2-0

function convertCSVToTable(){
    // Creating a csv data file
    let data = 
        `name, age, role
        Kaleb Burd, 24, Instructor
        Tariq Hook, 39, Co-Founder
        Harry Potter, 18, Student
        Gollum, 589, Student
        Bill Gates, 65, Student`;
    // Split data into rows
    let rows = data.split("\n");
    // Iterating over all the rows
    for(let i = 0; i < rows.length; i++){
        rows[i] = rows[i].split(", ")
    }
    console.log(rows);
}


// Part 2-1
function sumOfAges(){
    // Creating a csv file
    let data = 
        `name, age, role
        Kaleb Burd, 24, Instructor
        Tariq Hook, 39, Co-Founder
        Harry Potter, 18, Student
        Gollum, 589, Student
        Bill Gates, 65, Student`;
    // split data into rows
    let rows = data.split("\n");
    // iterating over all the rows
    for(let i = 0; i < rows.length; i++){
        rows[i] = rows[i].split(", ")
    }
    // Set total variable to 0
    let total = 0;
    // Iterating over all the rows
    for(let i = 1; i < rows.length; i++){
        // Converting a string into a number
        let age = Number(rows[i][1]);
        // Adding age to total
        total += age;
    }
        /* Iteration i    total age           age
            1               0                  0
            1               24                 24
            2               24                 39
            2               63                 39
            3               63                 18 
            3               81                 18
            4               81                 589
            4               670                589
            5               670                 65
            5               735                 65
    */
   // Print to console 735
    console.log(total);
}

// Part 2-2
function averageAge(){
    // Creating a csv file
    let data = 
        `name, age, role
        Kaleb Burd, 24, Instructor
        Tariq Hook, 39, Co-Founder
        Harry Potter, 18, Student
        Gollum, 589, Student
        Bill Gates, 65, Student`;
    // Split data into rows
    let rows = data.split("\n");
    // Iterating over all the rows
    for(let i = 0; i < rows.length; i++){
        rows[i] = rows[i].split(", ")
    }
    // Setting variable total to 0
    let total = 0;
    // Iterating over rows
    for(let i = 1; i < rows.length; i++){
        // Converting a string to a number
        let age = Number(rows[i][1]);
        // Adding age to total
        total += age;
    }
        /* Iteration i    total age           age
            1               0                  0
            1               24                 24
            2               24                 39
            2               63                 39
            3               63                 18 
            3               81                 18
            4               81                 589
            4               670                589
            5               670                 65
            5               735                 65
    */
    // Getting the average age by dividing total(age) by number of individual ages
    let average = total/(rows.length-1);
    //Print 147 to console
    console.log(average);

}

// Part 2-3
function three(){
    // Creating a csv file
    let data = 
        `name, age, role
        Kaleb Burd, 24, Instructor
        Tariq Hook, 39, Co-Founder
        Harry Potter, 18, Student
        Gollum, 589, Student
        Bill Gates, 65, Student`;
     // Split data into rows
    let rows = data.split("\n");
    // Iterating over rows
    for(let i = 0; i < rows.length; i++){
        rows[i] = rows[i].split(", ")
    }
    // Set variable largest to -1
    let largest = -1;
    // Iterating over rows
    for(let i = 1; i < rows.length; i++){
        // Convert string to a number and set to age
        let age = Number(rows[i][1]);
        // if this is the largest age, set to largest
        if(largest < age){
            largest = age;
        }
    }
        /* Iteration i    age(rows[i][1])       largest(age)
            1               24                  -1
            1               24                  24
            2               39                  24
            2               39                  39
            3               18                  39
            3               18                  39
            4               589                 39
            4               589                 589
            5               65                  589
            5               65                  589 
    */
   //Print 589 to console
    console.log(largest);

}

//Part 2-4
function findLargestAge (){
    // Creating a csv file
    let data = 
        `name, age, role
        Kaleb Burd, 24, Instructor
        Tariq Hook, 39, Co-Founder
        Harry Potter, 18, Student
        Gollum, 589, Student
        Bill Gates, 65, Student`;
    // Split data into rows
    let rows = data.split("\n");
    // Iterating over rows
    for(let i = 0; i < rows.length; i++){
        rows[i] = rows[i].split(", ")
    }
    // Setting variable largest to -1 and declaring variable person
    let largest = -1;
    let person;
    // Iterating over rows
    for(let i =1; i < rows.length; i++){
        //Convert string to number
        let age = Number(rows[i][1]);
        // If largest is less than age
        if(largest < age){
            // Declare largest to be age
            largest = age;
            // Declare person to be person with that age
            person = rows[i][0]
        }
    } 
    /* Iteration i          age                 largest(age)                person
            1               -1                   -1                         undefined
            1               24                   24                         Kaleb Burd
            2               24                   24                         Kaleb Burd
            2               39                   39                         Tariq Hook
            3               39                   39                         Tariq Hook
            3               18                   39                         Tariq Hook
            4               589                  39                         Tariq Hook
            4               589                  589                        Gollum
            5               65                   589                        Gollum

    */       
    // Print Gollum to console
    console.log(person);

}
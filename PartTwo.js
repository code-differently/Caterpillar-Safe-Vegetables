
function convertCSV() {
    let data = `name, age, role
          Kaleb Burd, 24, Instructor
          Tariq Hook, 39, Co-Founder
          Harry Potter, 18, Student
          Gollum, 589, Student
          Bill Gates, 65, Student`;
    let rows = data.split("\n");
    for (let i = 0; i < rows.length; i++) {
      rows[i] = rows[i].split(", ");
    }
    console.log(rows);
  }
  // Part 2-1
  function one() {
    //instantiating data
    let data = `name, age, role
          Kaleb Burd, 24, Instructor
          Tariq Hook, 39, Co-Founder
          Harry Potter, 18, Student
          Gollum, 589, Student
          Bill Gates, 65, Student`;
    //creating rows by splitting the data by each new line
    let rows = data.split("\n");
    //Iterate over the rows and separate by coma and space
    for (let i = 0; i < rows.length; i++) {
      rows[i] = rows[i].split(", ");
    }
    //creates a variable to hold data
    let total = 0;
    //Iterate over each row only the second indexes
    for (let i = 0; i < rows.length; i++) {
      let age = Number(rows[i][1]);
      //Keep adding age to the total
      total += age;
    }
    //Print the data inside of total
    console.log(total);
  }
  // Part 2-2
  function two() {
    let data = `name, age, role
          Kaleb Burd, 24, Instructor
          Tariq Hook, 39, Co-Founder
          Harry Potter, 18, Student
          Gollum, 589, Student
          Bill Gates, 65, Student`;
    let rows = data.split("\n");
    for (let i = 0; i < rows.length; i++) {
      rows[i] = rows[i].split(", ");
    }
    let total = 0;
    for (let i = 0; i < rows.length; i++) {
      let age = Number(rows[i][1]);
      total += age;
    }
  //calculate the average age by dividing by each row
    let average = total / rows.length;
  //Print out the average age
    console.log(average);
  }
  // Part 2-3
  function three() {
    let data = `name, age, role
          Kaleb Burd, 24, Instructor 
          Tariq Hook, 39, Co-Founder 
          Harry Potter, 18, Student 
          Gollum, 589, Student 
          .
          Bill Gates, 65, Student`; 
    let rows = data.split("\n");
    for (let i = 0; i < rows.length; i++) {
      rows[i] = rows[i].split(", ");
    }
  // create a variable that equals -1
    let largest = -1;
    for (let i = 1; i < rows.length; i++) {
      let age = Number(rows[i][1]);
  //Create a condition that largest is less than age
      if (largest < age) {
  //If condition is true set largest variable equal to age variable
          largest = age;
      }
        /* Iteration  |    Largest    |      age
              0            -1
              1            24              24
              2            39              39
              3            39              18
              4            589             589
              5            589             65
        */
    }
  //Print data inside of largest
    console.log(largest);
  }
  //Part 2-4
  function four() {
    let data = `name, age, role
          Kaleb Burd, 24, Instructor
          Tariq Hook, 39, Co-Founder
          Harry Potter, 18, Student
          Gollum, 589, Student
          Bill Gates, 65, Student`;
    let rows = data.split("\n");
    for (let i = 0; i < rows.length; i++) {
      rows[i] = rows[i].split(", ");
    }
    let largest = -1;
    let person;
    for (let i = 0; i < rows.length; i++) {
      let age = Number(rows[i][1]);
      if (largest < age) {
        largest = age;
        person = rows[i][0];
      }
    }
    console.log(person);
  }
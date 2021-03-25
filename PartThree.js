
class PartThree {

    findYoungest(data) {

        // let data =
        //     `name, age, role
        // Kaleb Burd, 24, Instructor
        // Tariq Hook, 39, Co-Founder
        // Harry Potter, 18, Student
        // Gollum, 589, Student
        // Bill Gates, 65, Student`;

        let rows = data.split("\n");

        for (let i = 0; i < rows.length; i++) {
            rows[i] = rows[i].split(", ")
        }

        let youngest = 10000000;
        let person;

        for (let i = 0; i < rows.length; i++) {
            let age = Number(rows[i][1]);

            if (youngest > age) {
                youngest = age;
                person = rows[i][0]
            }
        }

        ;


        return person;
    }




    findLongestName(data) {

        // let data =
        //     `name, age, role
        // Kaleb Burd, 24, Instructor
        // Tariq Hook, 39, Co-Founder
        // Harry Potter, 18, Student
        // Gollum, 589, Student
        // Bill Gates, 65, Student`;

        let rows = data.split("\n");

        for (let i = 0; i < rows.length; i++) {
            rows[i] = rows[i].split(", ")
        }
        let largest = -1;

        for (let i = 0; i < rows.length; i++) {
            let longName = string.split("")(rows[i][0]);
            if (largest > longName) {
                largest = longName;
            }
        }
        return largest;
    }


    findCoOwner(data) {

        // let data =
        //     `name, age, role
        // Kaleb Burd, 24, Instructor
        // Tariq Hook, 39, Co-Founder
        // Harry Potter, 18, Student
        // Gollum, 589, Student
        // Bill Gates, 65, Student`;

        let rows = data.split("\n");

        for (let i = 0; i < rows.length; i++) {
            rows[i] = rows[i].split(", ")
        }

        // let role = -1;
        let person;

        for(let i = 0; i < rows.length; i++){
            let role = String(rows[i][2]);
            if(role === "Co-Founder"){
                person = rows[i][0]
            }
        }
    
        return person;
    }

    findStudents(data) {

        let rows = data.split("\n");

        for (let i = 0; i < rows.length; i++) {
            rows[i] = rows[i].split(", ")
        }

        // let role = -1;
        let students;

        for(let i = 0; i < rows.length; i++){
            let role = String(rows[i][2]);
            if(role === "Student"){
                students += rows[i][0] += ","
            }
        }
    
        return students;
    }

}

module.exports = PartThree;
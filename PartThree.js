
class PartThree {

    findYoungest(data){
        let person;

        let rows = getRows(data);

        let smallest = 9999;

        // get youngest person
        for(let i = 1; i < rows.length; i++){
            let age = Number(rows[i][1]);
            if(smallest > age){
                smallest = age;
                person = rows[i][0]
            }
        }

        return person.trim();
    }

    findLongestName(data){
        let person;

        let rows = getRows(data);

        let longest = 0;

        // get person with longest name
        for(let i = 1; i < rows.length; i++){
            let name = Number(rows[i][0].trim().length);
            if(longest < name){
                longest = name;
                person = rows[i][0]
            }
        }

        return person.trim();
    }

    findCoOwner(data){

        let rows = getRows(data);

        let title = 'Co-Founder';

        // get name of person with role of Co-Founder
        for(let i = 1; i < rows.length; i++){
            let role = rows[i][2].trim();
            if(title === role){
                return rows[i][0].trim();
            }
        }

        return 'Not found';
    }

    findStudents(data){
        let rows = getRows(data);

        let title = 'Student';
        let students = [];

        // get name of person with role of Co-Founder
        for(let i = 1; i < rows.length; i++){
            let role = rows[i][2].trim();
            if(title === role){
                students.push(rows[i][0].trim())
            }
        }

        return students;
    }

}

module.exports = PartThree;

// get array of arrays in record/ field format
function getRows(data) {

    // split each line into a single record with header
    let rows = data.split("\n");

    // seperate each row record into it's field record by delimeter
    for (let i = 0; i < rows.length; i++) {
        rows[i] = rows[i].split(", ");
    }
    return rows;
}

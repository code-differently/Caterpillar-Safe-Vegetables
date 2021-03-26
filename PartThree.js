
class PartThree {

    findYoungest(data){
        let rows = data.split("\n");
        for (let i = 0; i < rows.length; i++) {
            rows[i] = rows[i].split(", ");
        }
        let youngest = 999999;
        let person = "";
        for (let i = 1; i < rows.length; i++) {
            let age = Number(rows[i][1]);
            if(youngest > age) {
                youngest = age;
                person = rows[i][0];
            }
        }
        return person.trim();
    }

    findLongestName(data){
        let rows = data.split("\n");
        for(let i = 0; i < rows.length; i++) {
            rows[i] = rows[i].split(", ");
        }
        
        let person = rows[1][0].trim();
        let longestName = "";
        for (let i = 1; i < rows.length; i++) {
            person = rows[i][0].trim();
            if ( longestName.length < person.length) {
                longestName = person.trim();
                console.log("LongestName = " + longestName);
            }
        }
        return longestName.trim();
    }

    findCoOwner(data){
        let rows = data.split("\n");
        for (let i = 0; i < rows.length; i++) {
            rows[i] = rows[i].split(", ");
        }

        let coFounder = "";
        for (let i = 1; i < rows.length; i++) {
            if (rows[i][2].trim() === "Co-Founder") {
                coFounder = rows[i][0].trim();
            }
        }
        return coFounder;
    }

    findStudents(data){
        let rows = data.split("\n");
        for (let i = 0; i < rows.length; i++) {
            rows[i] = rows[i].split(", ");
        }

        let Student = [];
        for (let i = 1; i < rows.length; i++) {
            if (rows[i][2].trim() === "Student") {
                 Student.push(rows[i][0].trim());
            }
        }
        return Student;
    }

}

module.exports = PartThree;
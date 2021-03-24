
const PartThree = require("./PartThree.js")

test("youngest test01", () => {

    let partThree = new PartThree();
    let expected = "Harry Potter";
    let data = 
        `name, age, role
        Kaleb Burd, 24, Instructor
        Tariq Hook, 39, Co-Founder
        Harry Potter, 18, Student
        Gollum, 589, Student
        Bill Gates, 65, Student`;
    
    let actual = partThree.findYoungest(data);

    expect(actual).toEqual(expected);
});

test("youngest test02", () => {

    let partThree = new PartThree();
    let expected = "Kaleb Burd";
    let data = 
        `name, age, role
        Kaleb Burd, 24, Instructor
        Tariq Hook, 39, Co-Founder
        Gollum, 589, Student
        Bill Gates, 65, Student`;
    
    let actual = partThree.findYoungest(data);

    expect(actual).toEqual(expected);
});

test("longest test01", () => {

    let partThree = new PartThree();
    let expected = "Harry Potter";
    let data = 
        `name, age, role
        Kaleb Burd, 24, Instructor
        Tariq Hook, 39, Co-Founder
        Harry Potter, 18, Student
        Gollum, 589, Student
        Bill Gates, 65, Student`;
    
    let actual = partThree.findLongestName(data);

    expect(actual).toEqual(expected);
});

test("longest test01", () => {

    let partThree = new PartThree();
    let expected = "Arnold Schwarzenegger";
    let data = 
        `name, age, role
        Kaleb Burd, 24, Instructor
        Tariq Hook, 39, Co-Founder
        Harry Potter, 18, Student
        Arnold Schwarzenegger, 73, Student
        Gollum, 589, Student
        Bill Gates, 65, Student`;
    
    let actual = partThree.findLongestName(data);

    expect(actual).toEqual(expected);
});

test("coowner test01", () => {

    let partThree = new PartThree();
    let expected = "Tariq Hook";
    let data = 
        `name, age, role
        Kaleb Burd, 24, Instructor
        Tariq Hook, 39, Co-Founder
        Harry Potter, 18, Student
        Arnold Schwarzenegger, 73, Student
        Gollum, 589, Student
        Bill Gates, 65, Student`;
    
    let actual = partThree.findCoOwner(data);

    expect(actual).toEqual(expected);
});

test("coowner test01", () => {

    let partThree = new PartThree();
    let expected = "Kaleb Burd";
    let data = 
        `name, age, role
        Kaleb Burd, 24, Co-Founder
        Harry Potter, 18, Student
        Arnold Schwarzenegger, 73, Student
        Gollum, 589, Student
        Bill Gates, 65, Student`;
    
    let actual = partThree.findCoOwner(data);

    expect(actual).toEqual(expected);
});

test("students test01", () => {

    let partThree = new PartThree();
    let expected = ["Harry Potter", "Gollum", "Bill Gates"];
    let data = 
        `name, age, role
        Kaleb Burd, 24, Instructor
        Tariq Hook, 39, Co-Founder
        Harry Potter, 18, Student
        Gollum, 589, Student
        Bill Gates, 65, Student`;
    
    let actual = partThree.findStudents(data);

    expect(actual).toEqual(expected);
});

test("students test02", () => {

    let partThree = new PartThree();
    let expected = ["Kaleb Burd", "Harry Potter", "Arnold Schwarzenegger", "Bill Gates"];
    let data = 
        `name, age, role
        Kaleb Burd, 24, Student
        Tariq Hook, 39, Co-Founder
        Harry Potter, 18, Student
        Arnold Schwarzenegger, 73, Student
        Bill Gates, 65, Student`;
    
    let actual = partThree.findStudents(data);

    expect(actual).toEqual(expected);
});
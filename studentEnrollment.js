// Create arrays for each subject
var DSA = [A];
var PL = [B];
var Networks = [C];

// Function to display the current enrolled students in a subject
function displayEnrolledStudents(subjectArray) {
    if (subjectArray.length === 0) {
        console.log("No students currently enrolled.");
    } else {
        console.log("Currently enrolled students: " + subjectArray.join(", "));
    }
}

// Function to enroll or unenroll students in subjects
function enrollStudent() {
    var subjects = ["DSA", "PL", "Networks"];
    var subjectChoice;
    var operationChoice;

    // Subject selection loop
    while (true) {
        subjectChoice = prompt("Select a subject to enroll in (A) DSA, (B) PL, (C) Networks or (D) Exit:");

        // Convert the choice to uppercase for easier comparison
        switch (subjectChoice?.toUpperCase()) {
            case "A":
                subjectChoice = DSA;
                break;
            case "B":
                subjectChoice = PL;
                break;
            case "C":
                subjectChoice = Networks;
                break;
            case "D":
                console.log("Final enrollment lists:");
                console.log("DSA:", DSA);
                console.log("PL:", PL);
                console.log("Networks:", Networks);
                return; // Exit the program
            default:
                console.log("Invalid choice. Please select A, B, C, or D.");
                continue; // Go back to the subject selection
        }

        // Operations loop
        while (true) {
            operationChoice = prompt("Select an operation: (A) Enroll, (B) Unenroll, (C) Select Another Subject, (D) Exit");

            switch (operationChoice?.toUpperCase()) {
                case "A":
                    // Enroll a student
                    var studentName = prompt("Enter the name of the student to enroll:");
                    if (studentName) {
                        subjectChoice.push(studentName); // Add student to the selected subject
                        console.log(studentName + " has been enrolled in " + (subjects[subjects.indexOf(subjectChoice)]));
                    }
                    break;
                case "B":
                    // Unenroll a student
                    displayEnrolledStudents(subjectChoice);
                    var unenrollName = prompt("Enter the name of the student to unenroll:");
                    var index = subjectChoice.indexOf(unenrollName);
                    if (index > -1) {
                        subjectChoice.splice(index, 1); // Remove the student from the selected subject
                        console.log(unenrollName + " has been unenrolled from " + (subjects[subjects.indexOf(subjectChoice)]));
                    } else {
                        console.log(unenrollName + " is not enrolled in this subject.");
                    }
                    break;
                case "C":
                    // Select another subject
                    break; // This will exit the operations loop and go back to subject selection
                case "D":
                    // Exit
                    console.log("Final enrollment lists:");
                    console.log("DSA:", DSA);
                    console.log("PL:", PL);
                    console.log("Networks:", Networks);
                    return; // Exit the program
                default:
                    console.log("Invalid choice. Please select A, B, C, or D.");
                    continue; // Go back to the operations selection
            }
        }
    }
}

//Student management system where each student record is stored as a tuple containing their name, unique id, and grade.
//Depending on the grade, return if the student is Admitted or Rejected.
 
let manageStudent: [string, string, number] = ["Popa Alina", "Stud-124", 5]
//Checking if the grade is equal or higher than 5. If yes, we will add "Admitted" string at the end of the list. If not, we will add "Rejected" string at the end of the list.
if(manageStudent[2] >= 5){
    manageStudent.push("Admitted")
} else {
    manageStudent.push("Rejected")
}
console.log(manageStudent)
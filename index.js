let task1 = "Sweep the floor"
let task2 = "Get groceries"
let task3 = "Make dinner"

// if (task1 === "Make dinner"){
//     console.log("Completed")
// }else{
//     console.log("Incomplete")
// }

// if (task2 === "Make dinner"){
//     console.log("Completed")
// }else{
//     console.log("Incomplete")
// }

// if (task3 === "Make dinner"){
//     console.log("Completed")
// }else{
//     console.log("Incomplete")
// }

let tasks = [task1, task2, task3]


//write a for loop that will print each of the tasks in the tasks array
//intermediate challenge: implement the above if statement into that for loop
for(let i = 0; i < tasks.length; i++) {
  let string = tasks[i]

  if(tasks[i] === 'Make dinner') {
    string += ' - Complete'
  } else {
    string += ' - Incomplete'
  }

  console.log(string)
}

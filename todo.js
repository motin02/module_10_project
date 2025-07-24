// Array of Todo Items
const todos = [
  { title: "Do homework", done: false },
  { title: "Buy groceries", done: true },
  { title: "Read a book", done: false },
  { title: "Clean the room", done: true },
  { title: "Practice coding", done: false },
  { title: "Walk the dog", done: true }
];

// Filter for Completed Tasks (done: true)
const completedTasks = todos.filter(todo => todo.done);

//  Filter for Ongoing Tasks (done: false)
const ongoingTasks = todos.filter(todo => !todo.done);

//  Display Completed Tasks
console.log("✅ Done:");
completedTasks.forEach((task, index) => {
  console.log(`${index +1}. ${task.title}`);
});

// Display Ongoing Tasks
console.log("\n⏳ Ongoing:");
ongoingTasks.forEach((task, index) => {
  console.log(`${index + 1}. ${task.title}`);
});

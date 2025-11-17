const prompt = require("prompt-sync")({ sigint: true });

let todos = [];

function generateUniqueId() {
  let timestamp = Date.now();
  let alphabets = "abcdefghijklmnopqrstuvwxyz";
  let randomString = `${timestamp}`;

  for (let i = 0; i < 5; i++) {
    randomLetter = Math.floor(Math.random() * alphabets.length);
    randomString += randomLetter;
  }

  return randomString;
}

function addTodo() {
  let input = "";
  input = prompt("Add a todo activity:");
  if (input === "" || input === " ") {
    console.log("\n\nTodo activity cannot be empty!\n\n");
    return;
  }

  let todo = {
    id: generateUniqueId(),
    text: input.trim(),
    isComplete: false,
  };
  todos.push(todo);
  console.log("\n\nAdding a todo into the list SUCCESS\n\n");
}

function markTodoCompleted() {
  listTodos();

  if (todos.length === 0) {
    return;
  }
  let numberString = prompt("Select the number of completed activity: ");
  let number = +numberString.trim();
  if (!isValidNumberSelection(number)) {
    return;
  }

  let index = number - 1;
  let selectedTodo = todos[index];
  if (selectedTodo.isComplete) {
    console.log("\n\nTodo is already marked complete\n\n");
    return;
  }
  selectedTodo.isComplete = true;

  console.log("\n\n Todo mark as complete SUCCESS\n\n");
}

function isValidNumberSelection(number) {
  if (!Number.isInteger(number) || number <= 0 || number > todos.length) {
    console.log("Invalid number. Please enter a valid number from the list.");
    return false;
  }

  return true;
}

function deleteTodo() {
  listTodos();
  if (todos.length === 0) {
    return;
  }
  let numberString = prompt("Select the number of a todo to be deleted: ");
  let number = +numberString.trim();
  if (!isValidNumberSelection(number)) {
    return;
  }

  let newTodos = [];
  for (let i = 0; i < todos.length; i++) {
    if (i === number - 1) {
      continue;
    }

    newTodos.push(todos[i]);
  }

  todos = newTodos;
  console.log("\n\nDelete todo SUCCESS\n\n");
}

function listTodos() {
  console.log("\n\n--- YOUR TO-DO LIST ---");
  if (todos.length === 0) {
    console.log("\n\nNo to-dos to display.\n\n");
    return;
  }
  for (let i = 0; i < todos.length; i++) {
    let todo = todos[i];
    let output = `${i + 1}. ${todo.isComplete ? "[DONE]  " : "[ACTIVE]"} | ${todo.text}`;
    console.log(output);
  }

  console.log("------------------------\n\n");
}

function runTodoApp() {
  let running = true;
  let commands = ["add", "complete", "delete", "list", "exit"];
  while (running) {
    console.log("Todo list app commands");
    for (let i = 0; i < commands.length; i++) {
      console.log(`- ${commands[i]}`);
    }

    let input = prompt("Please insert a command: ");
    switch (input.trim()) {
      case "add":
        addTodo();
        break;
      case "complete":
        markTodoCompleted();
        break;
      case "delete":
        deleteTodo();
        break;
      case "list":
        listTodos();
        break;
      case "exit":
        console.log("Exit from todo application app...");
        return;
      default:
        console.log("\n\nPlease insert a valid command from the list!\n\n");
    }
  }
}

// Jangan ubah bagian di bawah ini. Ini adalah cara Node.js menjalankan fungsi utama
// dan mengekspor fungsi-fungsi untuk pengujian (jika nanti ada).

if (require.main === module) {
  runTodoApp();
}

module.exports = {
  todos,
  generateUniqueId,
  addTodo,
  markTodoCompleted,
  deleteTodo,
  listTodos,
  runTodoApp,
};

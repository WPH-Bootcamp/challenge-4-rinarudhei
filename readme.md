# The Interactive To-Do List App

This is a simple To-Do list CLI App.

## How to start

First, run `npm install` to install dependencies.
Then, run `npm run dev` to start the To-Do List app. Follow the instruction from the terminal!

## To-Do commands

- `add`: Add a todo into list
- `list`: Show todo list with each status
- `complete`: Mark a todo as completed
- `delete`: Delete a todo from the list
- `exit`: Exit To-Do List app

## Backend concept

- Every todo object has a unique id, activity string text, and complete status field (id, text, status)
- Every todo object will be pushed into todos array
- Data only saved in memory so it will not persist (Your todo list data will be empty every time you start the app)

### `addTodo()`

- Prompt user for todo text
- Validate input (non-empty)
- Create todo object with: id, text, isCompleted (false)
- Add to todos array
- Provide success feedback

### `markTodoCompleted()`

- Show current todos with `listTodos()`
- Prompt for todo number to mark complete
- Validate input (number within range)
- Update isCompleted status
- Handle already completed todos
- Provide feedback

### `deleteTodo()`

- Show current todos with `listTodos()`
- Prompt for todo number to delete
- Validate input (number within range)
- Remove todo from array
- Provide feedback

### `listTodos()`

- Display formatted list of all todos
- Show status ([ACTIVE]/[DONE])
- Handle empty list case
- Format output clearly

### `runTodoApp()`

- Main application loop
- Display command menu
- Process user commands
- Handle invalid commands
- Exit mechanism

## Unit-test 100% coverage

This app is unit-tested with 100% coverage to make sure top-notch code quality

```
----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
----------|---------|----------|---------|---------|-------------------
All files |   98.59 |       96 |     100 |   98.52 |
 index.js |   98.59 |       96 |     100 |   98.52 | 123
----------|---------|----------|---------|---------|-------------------
Test Suites: 1 passed, 1 total
Tests:       10 passed, 10 total
```

---

```

```

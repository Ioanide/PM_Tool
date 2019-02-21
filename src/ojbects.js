// I've created an array with different possibilities for the status
const status = ["New", "In progress", "Feedback", "Rework", "Resolved", "Ready for Testing"]

let users = [];
let sprints = [];
let issues = [];
let tasks = [];
let comments = [];

// Here's a function that generates an ID once the selection has been made

ID = () => {
    if (typeof ID.id == "undefined") ID.id = 1;
    else ID.id++;
    return ID.id;
  };

function User(id, name) {
    this.id = ID();
    this.name = name;
}
get ID() {
    return this.id;
}

get getName()
    }
}

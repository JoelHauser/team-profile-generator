const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");

const inquirer = require("inquirer");
const fs = require("fs");

const generateHTML = require("./src/helper-template");

const teamArray = [];

const insertManager = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "State managers name",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please state your managers name.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "What is your managers ID number?",
        validate: (nameInput) => {
          if (isNaN(nameInput)) {
            console.log("Please enter your managers ID number.");
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is your managers email?",
        validate: (email) => {
          if (email) {
            return true;
          } else {
            console.log("Please enter your managers email.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is your managers office number?",
        validate: (nameInput) => {
          if (isNaN(nameInput)) {
            console.log("Please enter your managers office number.");
          } else {
            return true;
          }
        },
      },
    ])
    .then((managerInput) => {
      const { name, id, email, officeNumber } = managerInput;
      const manager = new Manager(name, id, email, officeNumber);

      teamArray.push(manager);
      console.log(manager);
    });
};

const insertEmployee = () => {
  console.log(`Adding employee`);

  return inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "What is your employee?",
        choices: ["Engineer", "Intern"],
      },
      {
        type: "input",
        name: "name",
        message: "What is the name of your employee?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter your employee's name.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "What is their ID number?",
        validate: (nameInput) => {
          if (isNaN(nameInput)) {
            console.log("Please enter their ID number.");
            return false;
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "State your their email",
        validate: (email) => {
          if (email) {
            return true;
          } else {
            console.log("Please enter the employees' email.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "github",
        message: "Enter employee GitHub username.",
        when: (input) => input.role === "Engineer",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter the employees GitHub username.");
          }
        },
      },
      {
        type: "input",
        name: "school",
        message: "Please enter interns school",
        when: (input) => input.role === "Intern",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter a school.");
          }
        },
      },
      {
        type: "confirm",
        name: "confirmInsertEmployee",
        message: "Do you wish to add more members?",
        default: false,
      },
    ])
    .then((employeeData) => {
      let { name, id, email, role, github, school, confirmInsertEmployee } =
        employeeData;
      let employee;

      if (role === "Engineer") {
        employee = new Engineer(name, id, email, github);
        console.log(employee);
      } else {
        employee = new Intern(name, id, email, school);
        console.log(employee);
      }
      teamArray.push(employee);

      if (confirmInsertEmployee) {
        return insertEmployee(teamArray);
      } else {
        return teamArray;
      }
    });
};

const writeFile = (data) => {
  fs.writeFile("./dist/index.html", data, (err) => {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log("Your employee profile has been created.");
    }
  });
};

insertManager()
  .then(insertEmployee)
  .then((teamArray) => {
    return generateHTML(teamArray);
  })
  .then((pageHTML) => {
    return writeFile(pageHTML);
  })
  .catch((err) => {
    console.log(err);
  });

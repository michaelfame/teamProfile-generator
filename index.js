const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.
const idStaffList = [];
const teamMembers = [];

const appMenu = () => {
    function createManager(){
        console.log('Please build your working Team!');
        inquirer.prompt([
            {
                type: 'input',
                name: 'managerName',
                message: "What is the team Manager's name? ",
                validate: answer => {
                    if (answer !== ''){
                        return true;
                        } return "Please Enter the name of the Manager;"
                }
                },
              
              {
                type: 'input',
                name: 'managerId',
                message: 'Kindly provide the Manager id? '
              },
              {
                type: 'input',
                name: 'managerEmail',
                message: "What is your Manager's email 📧?"
              },
              {
                type: 'input',
                name: 'managerOfficeNumber',
                message: "What is the Manager's office number?"
              },

        ])
        .then(answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
            teamMembers.push(manager);
            idStaffList.push(answers.managerId);
        })
        }
        //create manager
        createManager();            
    }

    appMenu();

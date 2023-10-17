const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template");


// TODO: Write Code to gather information about the development team members, and render the HTML file.
const idStaffList = [];
const teamMembers = [];

const appMenu = () => {
    
function buildTeam() { 
    function buildTeam() {
        if(!fs.existsSync(OUTPUT_DIR)) {
            fs.mkdirSync(OUTPUT_DIR)
        }
        fs.writeFileSync(outputPath, render(teamMembers), 'utf-8');
    }
}
    

  

function addIntern() {
    inquirer.prompt([  
        { 
            type: 'input',
            name: 'internName',
            message: "What is the name of your intern? "
        },  
        { 
            type: 'input',
            name: 'internId',
            message: "What is the ID of your intern? "
        },
        { 
            type: 'input',
            name: 'internEmail',
            message: "What is the email of your intern? "
        },
        { 
            type: 'input',
            name: 'internSchool',
            message: " What is the school attended by your intern? "
        }
    ]) .then(answers =>{
        const intern = new Intern (answers.internName, answers.internId, answers.internEmail, answers.internSchool);               
        teamMembers.push(intern);
        idStaffList.push(answers.internId);
        console.log(intern); 
        createTeam();
        });

    }

function addEngineer(){
    inquirer.prompt([  
            { 
                type: 'input',
                name: 'engineerName',
                message: "What is the name of your engineer? "
            },  
            { 
                type: 'input',
                name: 'engineerId',
                message: "What is the ID of your engineer? "
            },
            { 
                type: 'input',
                name: 'engineerEmail',
                message: "What is the email of your engineer? "
            },
            { 
                type: 'input',
                name: 'engineerGithub',
                message: " What is the Github's username of your engineer? "
            }
        ]) .then(answers =>{
            const engineer = new Engineer(answers.engineerName,  answers.engineerId,   answers.engineerEmail, answers.engineerGithub); 
            teamMembers.push(engineer);
            idStaffList.push(answers.engineerId);
            console.log(engineer); 
            createTeam();
            });
            }


    function createTeam(){
        inquirer.prompt([
            {
                type: 'list',
                name: 'memberChoice',
                message: "Which type of team member type would you like to add? ",
                choices: [
                    "Engineer",
                    "Intern",
                    "I don't want to add any more team members"
                    ],
                },
            ])
            .then(userChoice => {
                if (userChoice.memberChoice === "Engineer"){
                    // add engineer
                    addEngineer();
                    } else if (userChoice.memberChoice === "Intern"){
                        // Ad Intern
                        addIntern();
                        } else {
                            // build the team function
                        buildTeam();
                        }
                    } );
                    }
                              
                  
      
    function createManager(){
        console.log('Please build your working Team!');
        inquirer.prompt([
            {
                type: 'input',
                name: 'managerName',
                message: "Kindly provide the Manager's name? ",   
                validate: answer => {
                    if (answer !== ''){
                        return true;
                        } 
                        return "Please Enter the name of the Manager;"
                },
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
        .then((answers) => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
            // console.log(manager);
            teamMembers.push(manager);
            idStaffList.push(answers.managerId);
            createTeam();
        });
        }

        //create manager
        createManager();            
    };

    appMenu();
